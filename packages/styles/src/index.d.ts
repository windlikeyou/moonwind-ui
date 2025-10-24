import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './index.scss';
declare const STYLE_PATHS: {
    readonly base: "./index.scss";
    readonly components: {
        readonly button: "./components/button.scss";
        readonly dataGrid: "./components/data-grid.scss";
    };
    readonly tokens: "./tokens/_variables.scss";
    readonly mixins: "./mixins.scss";
};
export declare const importStyle: (name?: keyof typeof STYLE_PATHS | "all") => Promise<void>;
export { STYLE_PATHS };
declare const _default: "./index.scss";
export default _default;
