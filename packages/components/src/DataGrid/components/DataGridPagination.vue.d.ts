import type { PaginationConfig } from '../types';
interface Props {
    config?: PaginationConfig | null;
    current: number;
    pageSize: number;
    total: number;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "page-change": (page: number) => any;
    "page-size-change": (pageSize: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onPage-change"?: ((page: number) => any) | undefined;
    "onPage-size-change"?: ((pageSize: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
