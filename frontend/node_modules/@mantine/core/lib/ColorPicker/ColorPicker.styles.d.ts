import { MantineSize } from '@mantine/styles';
export interface ColorPickerStylesParams {
    size: MantineSize;
    fullWidth: boolean;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: ColorPickerStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        preview: string;
        wrapper: string;
        body: string;
        sliders: string;
        slider: string;
        swatch: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=ColorPicker.styles.d.ts.map