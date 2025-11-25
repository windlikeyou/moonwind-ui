<template>
  <div :class="e('columns-panel')">
    <div :class="e('panel-header')">
      <div :class="e('search-box')">
        <span :class="e('search-icon')"><icon-search /></span>
        <input
          type="text"
          v-model="searchText"
          placeholder="Search columns..."
          :class="e('search-input')"
        />
      </div>
    </div>
    <div :class="e('column-panel-content')"> 
      <draggable
        v-model="localColumns"
        item-key="colId"
        handle=".drag-handle"
        :animation="200"

      >
        <template #item="{ element }">
          <div :class="[e('column-item'), {'is-search-active': isActiveCol(element.colId)}]">
            <span class="drag-handle"><icon-drag /></span>
            <label :class="e('checkbox-wrapper')">
              <input
                type="checkbox"
                :checked="!element.hide"
                @change="handleToggleColumn($event, element)"
              />
              <span>{{ element.colDef.headerName || element.colDef.field }}</span>
            </label>
          </div>
        </template>
      </draggable>
    </div>
    <div :class="e('column-panel-footer')">
      <MButton size="small" type="primary">重置</MButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, toRefs, inject, shallowRef } from "vue";
import { useNamespace } from "@moonwind-ui/hooks";
import type { DataGridColumn, GridApi } from "../types";
import { IconSearch, IconDrag } from "@moonwind-ui/icons";
import draggable from "vuedraggable";
import { GRID_INJECT_KEY } from "../utils";
import MButton from "@/Button/Button.vue";

defineOptions({
  name: "DataGridColumnsPanel",
});

const context = inject(GRID_INJECT_KEY)!

const { e } = useNamespace("data-grid");

const searchText = ref("");
const localColumns = shallowRef<DataGridColumn[]>([]);

watch(
  () => context.value.api,
  (currentAPi) => {
    if (currentAPi) {
      localColumns.value = currentAPi.getAllGridColumns()
    }
  },
  { immediate: true }
);

watch(() => localColumns.value, (newValue) => {
  if (context.value.api) {
    const currentState = context.value.api.getColumnState()
    const state = newValue.map(col => {
      return currentState.find(c => c.colId === col.colId)!
    });
    context.value.api.applyColumnState({ 
      state,
      applyOrder: true 
    });
  }
}, { deep: true })

const matchColumn = computed(() => {
  if(!searchText.value ||!context.value.api){
    return []
  }
  const cols = context.value.api.getAllGridColumns()
  return cols.filter(col => {
    const headerName = col.getColDef().headerName;

    return headerName && headerName.toLowerCase().includes(searchText.value.toLowerCase())
  }).map(col => col.getColId())
});

const isActiveCol = computed(() => (colId: string) =>{
  if(matchColumn.value.length === 0){
    return false
  }

  return matchColumn.value.some(id => id === colId)
})

const handleToggleColumn = (event: Event,element: DataGridColumn) => {
  const checked = (event.target as HTMLInputElement).checked;
  if(context.value.api){
    const state = context.value.api.getColumnState();
    const next = state.map((s: any) => {
      if (s.colId !== element.colId) return s;
      return { ...s, hide: !checked };
    });
    context.value.api.applyColumnState({ state: next });
  }
};
</script>
