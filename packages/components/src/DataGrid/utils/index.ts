import type { GridApi } from "ag-grid-community"
import type { DataGridColumn } from "../types"
import type { InjectionKey, ComputedRef } from "vue"

export const GRID_INJECT_KEY: InjectionKey<ComputedRef<GridContext>> = Symbol('grid-inject-key')

export interface GridContext {
    api: GridApi | null
    columns: DataGridColumn[]
}