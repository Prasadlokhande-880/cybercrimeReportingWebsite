import { MantineNumberSize, MantineColor } from '@mantine/styles';
interface ThumbStyles {
    color: MantineColor;
    size: MantineNumberSize;
    disabled: boolean;
    thumbSize: number;
}
declare const _default: (params: ThumbStyles, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        label: string;
        thumb: string;
        dragging: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Thumb.styles.d.ts.map