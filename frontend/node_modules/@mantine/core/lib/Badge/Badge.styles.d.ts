import { MantineSize, MantineNumberSize, MantineColor, MantineGradient, MantineTheme } from '@mantine/styles';
export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';
export interface BadgeStylesParams {
    color: MantineColor;
    size: MantineSize;
    radius: MantineNumberSize;
    gradient: MantineGradient;
    variant: BadgeVariant;
    fullWidth: boolean;
}
declare const _default: (params: BadgeStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        leftSection: string;
        rightSection: string;
        inner: string;
        root: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Badge.styles.d.ts.map