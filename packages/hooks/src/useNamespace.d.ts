export interface HiKitsConfig {
    namespace?: string;
}
export declare const provideHiKitsConfig: (config: HiKitsConfig) => void;
export declare const useNamespace: (block: string) => {
    ns: any;
    b: () => string;
    e: (el: string) => string;
    m: (mod: string) => string;
    is: (name: string, state: boolean) => string;
};
