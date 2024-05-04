import { MantineColor, MantineNumberSize } from '@mantine/styles';
export interface NavLinkStylesParams {
    color: MantineColor;
    variant: 'filled' | 'light' | 'subtle';
    noWrap: boolean;
    childrenOffset: MantineNumberSize;
    alignIcon: 'top' | 'center';
}
declare const _default: (params: NavLinkStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        icon: string;
        rightSection: string;
        body: string;
        label: string;
        description: string;
        children: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=NavLink.styles.d.ts.map