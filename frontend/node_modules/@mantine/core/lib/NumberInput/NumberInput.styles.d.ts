import { MantineNumberSize, MantineSize } from '@mantine/styles';
export interface NumberInputStylesParams {
    radius: MantineNumberSize;
    size: MantineSize;
}
export declare const CONTROL_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: NumberInputStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        rightSection: string;
        control: string;
        controlUp: string;
        controlDown: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=NumberInput.styles.d.ts.map