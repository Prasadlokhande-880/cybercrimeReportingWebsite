import { MantineSize, MantineColor, MantineNumberSize } from '@mantine/styles';
export interface CheckboxStylesParams {
    size: MantineSize;
    radius: MantineNumberSize;
    color: MantineColor;
    transitionDuration: number;
    labelPosition: 'left' | 'right';
    error: boolean;
    indeterminate: boolean;
}
declare const _default: (params: CheckboxStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        icon: string;
        inner: string;
        input: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Checkbox.styles.d.ts.map