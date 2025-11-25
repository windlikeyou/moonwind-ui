<template>
  <div :class="e('sidebar')">
    <!-- Panel Content (Left of tabs) -->
    <div :class="siderContentCss">
      <div :class="e('sidebar-body')">
        <DataGridColumnsPanel />
      </div>
    </div>

    <!-- Tab Bar (Right side) -->
    <div :class="e('sidebar-tabs')">
      <div
        :class="[e('sidebar-tab'), { [e('sidebar-tab-active')]: showPanel }]"
        @click="toggleTab"
        title="Columns"
      >
        <span :class="e('sidebar-icon')"><icon-column /></span>
        <span :class="e('sidebar-label')">列</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useNamespace } from "@moonwind-ui/hooks";
import { IconColumn, IconClose } from "@moonwind-ui/icons";
import DataGridColumnsPanel from "./DataGridColumnsPanel.vue";

defineOptions({
  name: "DataGridSidebar",
});

const { e } = useNamespace("data-grid");

const showPanel = ref(false);

const siderContentCss = computed(() =>{
  let baseCass = `${e('sidebar-content')}`
  if(!showPanel.value){
    baseCass += ` ${e('sidebar-content--collapsed')}`
  }
  return baseCass
})

const toggleTab = () => {
  showPanel.value = !showPanel.value
};
</script>
