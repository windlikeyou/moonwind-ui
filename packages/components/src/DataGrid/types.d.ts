import type { ColDef, GridApi, GridOptions } from 'ag-grid-community';
import type { VNode } from 'vue';
export type Key = string | number;
export type VueNode = VNode | string | number | null | undefined;
export interface DataGridColumn<T = any> {
    field?: string | keyof T;
    headerName?: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    sortable?: boolean;
    filter?: boolean | string | any;
    resizable?: boolean;
    cellStyle?: any;
    cellRenderer?: string | any;
    cellRendererParams?: any;
    valueFormatter?: (params: any) => string;
    valueGetter?: string | ((params: any) => any);
    valueSetter?: string | ((params: any) => boolean);
    cellEditor?: string | any;
    cellEditorParams?: any;
    editable?: boolean | ((params: any) => boolean);
    hide?: boolean;
    pinned?: 'left' | 'right' | null;
    columnGroupShow?: 'open' | 'closed';
    tooltipField?: string;
    tooltipValueGetter?: (params: any) => string;
    headerTooltip?: string;
    rowDrag?: boolean;
    rowDragMultiRow?: boolean;
    rowDragEntireRow?: boolean;
    rowDragText?: (params: any, dragItemCount: number) => string;
    checkboxSelection?: boolean | ((params: any) => boolean);
    headerCheckboxSelection?: boolean | ((params: any) => boolean);
    headerCheckboxSelectionFilteredOnly?: boolean;
    showDisabledCheckboxes?: boolean;
    [key: string]: any;
}
export interface PaginationConfig {
    current?: number;
    pageSize?: number;
    total?: number;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    showTotal?: boolean | ((total: number, range: [number, number]) => string);
    pageSizeOptions?: string[];
    onChange?: (page: number, pageSize: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
}
export interface RowSelection<T = any> {
    type: 'radio' | 'checkbox';
    selectedKeys?: Key[];
    onChange?: (keys: Key[], records: T[]) => void;
    getCheckboxProps?: (record: T) => {
        disabled?: boolean;
        name?: string;
    };
    onSelect?: (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void;
    onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
    onSelectInvert?: (selectedRowKeys: Key[]) => void;
    selections?: Array<{
        key: string;
        text: string;
        onSelect?: (changeableRowKeys: Key[]) => void;
    }>;
    hideSelectAll?: boolean;
    preserveSelectedRowKeys?: boolean;
    columnWidth?: number | string;
    columnTitle?: string | VueNode;
    fixed?: boolean | 'left' | 'right';
}
export interface FetchResult<T = any> {
    data: T[];
    total: number;
    current?: number;
    pageSize?: number;
}
export type FetchFunction<T = any> = (params: {
    current: number;
    pageSize: number;
    sorter?: any;
    filters?: any;
}) => Promise<FetchResult<T>>;
export interface DataGridProps<T = any> extends Omit<GridOptions<T>, 'columnDefs' | 'rowData' | 'pagination' | 'rowSelection' | 'api' | 'columnApi'> {
    columns: DataGridColumn<T>[];
    fetch?: FetchFunction<T>;
    dataSource?: T[];
    loading?: boolean;
    onLoading?: (loading: boolean) => void;
    pagination?: boolean | PaginationConfig;
    rowSelection?: RowSelection<T>;
    rowKey?: keyof T | ((record: T) => Key);
    height?: number | string;
    width?: number | string;
    bordered?: boolean;
    size?: 'small' | 'middle' | 'large';
    locale?: {
        emptyText?: string;
    };
    scroll?: {
        x?: number | string | true;
        y?: number | string;
    };
    title?: string | (() => VueNode);
    footer?: string | (() => VueNode);
    toolbar?: {
        visible?: boolean;
        showColumnToggle?: boolean;
        showQuickFilter?: boolean;
        showReset?: boolean;
        placement?: 'top' | 'bottom';
    };
    expandable?: {
        expandedRowKeys?: Key[];
        defaultExpandedRowKeys?: Key[];
        defaultExpandAllRows?: boolean;
        expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => VueNode;
        expandRowByClick?: boolean;
        expandIcon?: (props: any) => VueNode;
        onExpand?: (expanded: boolean, record: T) => void;
        onExpandedRowsChange?: (expandedKeys: Key[]) => void;
        indentSize?: number;
        rowExpandable?: (record: T) => boolean;
        showExpandColumn?: boolean;
        fixed?: boolean | 'left' | 'right';
        columnWidth?: number | string;
        columnTitle?: string | VueNode;
    };
    onRow?: (record: T, index?: number) => any;
    onHeaderRow?: (columns: DataGridColumn<T>[], index?: number) => any;
    onCell?: (record: T, rowIndex?: number) => any;
    onHeaderCell?: (column: DataGridColumn<T>) => any;
}
export interface DataGridEmits<T = any> {
    'update:loading': [loading: boolean];
    'grid-ready': [api: GridApi<T>];
    'selection-changed': [selectedRows: T[], selectedKeys: Key[]];
    'sort-changed': [sortModel: any];
    'filter-changed': [filterModel: any];
    'row-clicked': [event: any];
    'row-double-clicked': [event: any];
    'cell-clicked': [event: any];
    'cell-double-clicked': [event: any];
    'page-changed': [page: number, pageSize: number];
}
export interface DataGridInstance<T = any> {
    api: any;
    refresh: () => Promise<void>;
    getSelectedRows: () => T[];
    getSelectedKeys: () => Key[];
    setSelectedKeys: (keys: Key[]) => void;
    clearSelection: () => void;
    getAllData: () => T[];
    getCurrentPageData: () => T[];
    setPagination: (page: number, pageSize?: number) => void;
    getPagination: () => {
        current: number;
        pageSize: number;
        total: number;
    };
    exportData: (format?: 'csv' | 'excel') => void;
    resetSort: () => void;
    resetFilter: () => void;
    resetColumnSize: () => void;
}
export interface RowSelectionConfig<T> {
    type: 'radio' | 'checkbox';
    selectedKeys?: Key[];
    onChange?: (keys: Key[], records: T[]) => void;
}
export type { ColDef, GridApi, GridOptions, };
