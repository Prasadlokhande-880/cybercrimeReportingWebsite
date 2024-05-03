import { MantineNumberSize, MantineSize } from '@mantine/styles';
interface DefaultLabelStyles {
    size: MantineSize;
    radius: MantineNumberSize;
    variant: 'filled' | 'default' | 'unstyled';
    disabled: boolean;
    readOnly: boolean;
}
declare const _default: (params: DefaultLabelStyles, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        defaultValue: string;
        defaultValueRemove: string;
        defaultValueLabel: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=DefaultValue.styles.d.ts.map