import type { DataGridColumn } from '../types';
interface Props {
    config?: any;
    columns: DataGridColumn[];
    quickFilterText: string;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    reset: () => any;
    "quick-filter-change": (value: string) => any;
    "toggle-column": (column: DataGridColumn<any>) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onReset?: (() => any) | undefined;
    "onQuick-filter-change"?: ((value: string) => any) | undefined;
    "onToggle-column"?: ((column: DataGridColumn<any>) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
