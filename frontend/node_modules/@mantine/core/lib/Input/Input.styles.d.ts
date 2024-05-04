import { MantineNumberSize, MantineSize, MantineTheme } from '@mantine/styles';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export interface InputStylesParams {
    radius: MantineNumberSize;
    size: MantineSize;
    variant: InputVariant;
    multiline: boolean;
    invalid: boolean;
    rightSectionWidth: string | number;
    withRightSection: boolean;
    iconWidth: string | number;
    offsetBottom: boolean;
    offsetTop: boolean;
    pointer: boolean;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: InputStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        wrapper: string;
        input: string;
        withIcon: string;
        invalid: string;
        disabled: string;
        icon: string;
        rightSection: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Input.styles.d.ts.map