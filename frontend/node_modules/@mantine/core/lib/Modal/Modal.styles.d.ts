/// <reference types="react" />
export interface ModalStylesParams {
    overflow: 'outside' | 'inside';
    size: string | number;
    centered: boolean;
    zIndex: React.CSSProperties['zIndex'];
    fullScreen: boolean;
}
declare const _default: (params: ModalStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        close: string;
        overlay: string;
        root: string;
        inner: string;
        title: string;
        modal: string;
        header: string;
        body: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Modal.styles.d.ts.map