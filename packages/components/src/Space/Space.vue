<script setup lang="ts">
import { computed, inject, type CSSProperties, type VNode } from "vue";
import type { SpaceProps } from "./types";
import { useFlexGapSupport, useNamespace } from "@moonwind-ui/hooks";
import { getNumberSize } from "./utils";
import { SPACE_CONFIG_INJECTION_KEY } from "./config-provider";

defineOptions({
  name: "MSpace",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SpaceProps>(), {
  size: "small",
  direction: "horizontal",
});
const slots = defineSlots<{
  default: () => VNode[];
}>();
const injectConfig = inject(SPACE_CONFIG_INJECTION_KEY, {
  direction: "ltr",
  space: {
    size: "small",
  },
});
const { b, m,e } = useNamespace("space");
const flexible = useFlexGapSupport();

const spaceClass = computed(() => [
  b(),
  {
    [m("horizontal")]: props.direction === "horizontal",
    [m("vertical")]: props.direction === "vertical",
    [m("align-start")]: props.align === "start",
    [m("align-end")]: props.align === "end",
    [m("align-center")]: props.align === "center",
    [m("align-baseline")]: props.align === "baseline",
    [m("rtl")]: injectConfig.direction === "rtl",
  },
]);

const spaceSize = computed(() => injectConfig.space?.size || props.size ||'small')
const gapSize = computed(() => {
  return (
    Array.isArray(spaceSize.value) ? spaceSize.value : [spaceSize.value, spaceSize.value]
  ).map((item) => getNumberSize(item));
});

const gapStyleConfig = computed(() => {
  const gapStyle: CSSProperties = {};
  if (props.wrap) {
    gapStyle.flexWrap = "wrap";

    if (!flexible.value) {
      gapStyle.marginBottom = `-${gapSize.value[1]}px`;
    }
  }

  if (flexible.value) {
    gapStyle.columnGap = `${gapSize.value[0]}px`;
    gapStyle.rowGap = `${gapSize.value[1]}px`;
  }

  return gapStyle;
});
const wrapperStyle = computed(() => ({
  ...props.style,
  ...gapStyleConfig.value,
}))
const latestIndex = computed(() => (slots.default ? slots.default().length - 1 : -1));
const marginDirection = computed(() =>
  injectConfig.direction === "rtl" ? "marginLeft" : "marginRight"
);
const itemStyle = computed(() => (index: number) => {
  let style: CSSProperties = {};
  if (!flexible.value) {
    if (props.direction === "vertical") {
      if (index < latestIndex.value) {
        style = {
          marginBottom: `${gapSize.value[0] / (props.split ? 2 : 1)}px`,
        };
      }
    } else {
      style = {
        ...(index < latestIndex.value && {
          [marginDirection.value]: `${gapSize.value[0] / (props.split ? 2 : 1)}px`,
        }),
        ...(props.wrap && { paddingBottom: `${gapSize.value[1]}px` }),
      };
    }
  }

  return style;
});
</script>
<template>
  <div
    :class="spaceClass"
    :style="wrapperStyle"
  >
  <template v-for="(item,index) in (slots.default ? slots.default() : [])" :key="index">
    <div :class="e('item')" :style="itemStyle(index)">
      <component :is="item" />
    </div>
    <span :class="[e('item-split')]" v-if="split" :style="itemStyle(index)">
        <component :is="split" v-if="typeof split !== 'string'" />
        <template v-else>{{ split }}</template>
    </span>
  </template>
  </div>
</template>


