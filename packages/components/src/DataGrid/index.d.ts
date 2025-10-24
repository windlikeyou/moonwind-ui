import DataGridComponent from './DataGrid.vue';
import type { Plugin } from 'vue';
import type { DataGridProps, DataGridInstance, DataGridColumn, PaginationConfig } from './types';
declare const HiDataGrid: typeof DataGridComponent & Plugin;
export { HiDataGrid, type DataGridProps, type DataGridInstance, type DataGridColumn, type PaginationConfig, };
export default HiDataGrid;
