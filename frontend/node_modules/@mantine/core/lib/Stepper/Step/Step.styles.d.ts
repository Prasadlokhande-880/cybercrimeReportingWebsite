import { MantineColor, MantineNumberSize, MantineSize } from '@mantine/styles';
export interface StepStylesParams {
    color: MantineColor;
    iconSize: number;
    size: MantineSize;
    radius: MantineNumberSize;
    allowStepClick: boolean;
    iconPosition: 'right' | 'left';
    orientation: 'vertical' | 'horizontal';
}
export declare const iconSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: StepStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        stepLoader: string;
        step: string;
        stepWrapper: string;
        verticalSeparator: string;
        verticalSeparatorActive: string;
        stepIcon: string;
        stepCompletedIcon: string;
        stepBody: string;
        stepLabel: string;
        stepDescription: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Step.styles.d.ts.map