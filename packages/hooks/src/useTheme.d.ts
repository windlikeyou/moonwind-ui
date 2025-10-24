export type ThemeName = 'light' | 'dark';
export declare const useTheme: () => {
    theme: import("vue").Ref<ThemeName, ThemeName>;
    setTheme: (t: ThemeName) => void;
};
