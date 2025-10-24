import type { GridApi } from 'ag-grid-community';
import type { DataGridProps, DataGridInstance, Key } from './types';
declare const _default: <T extends Record<string, any> = any>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:loading"?: ((loading: boolean) => any) | undefined;
        readonly "onGrid-ready"?: ((api: GridApi<T>) => any) | undefined;
        readonly "onSelection-changed"?: ((selectedRows: T[], selectedKeys: Key[]) => any) | undefined;
        readonly "onSort-changed"?: ((sortModel: any) => any) | undefined;
        readonly "onFilter-changed"?: ((filterModel: any) => any) | undefined;
        readonly "onRow-clicked"?: ((event: any) => any) | undefined;
        readonly "onRow-double-clicked"?: ((event: any) => any) | undefined;
        readonly "onCell-clicked"?: ((event: any) => any) | undefined;
        readonly "onCell-double-clicked"?: ((event: any) => any) | undefined;
        readonly "onPage-changed"?: ((page: number, pageSize: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:loading" | "onGrid-ready" | "onSelection-changed" | "onSort-changed" | "onFilter-changed" | "onRow-clicked" | "onRow-double-clicked" | "onCell-clicked" | "onCell-double-clicked" | "onPage-changed"> & DataGridProps<T> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<DataGridInstance<T>>): void;
    attrs: any;
    slots: {};
    emit: ((evt: "update:loading", loading: boolean) => void) & ((evt: "grid-ready", api: GridApi<T>) => void) & ((evt: "selection-changed", selectedRows: T[], selectedKeys: Key[]) => void) & ((evt: "sort-changed", sortModel: any) => void) & ((evt: "filter-changed", filterModel: any) => void) & ((evt: "row-clicked", event: any) => void) & ((evt: "row-double-clicked", event: any) => void) & ((evt: "cell-clicked", event: any) => void) & ((evt: "cell-double-clicked", event: any) => void) & ((evt: "page-changed", page: number, pageSize: number) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
