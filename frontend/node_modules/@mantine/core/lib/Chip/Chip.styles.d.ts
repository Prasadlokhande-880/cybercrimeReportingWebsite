import { MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export interface ChipStylesParams {
    radius: MantineNumberSize;
    size: MantineSize;
    color: MantineColor;
}
declare const _default: (params: ChipStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        label: string;
        iconWrapper: string;
        checkIcon: string;
        input: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Chip.styles.d.ts.map