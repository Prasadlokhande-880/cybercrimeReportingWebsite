import React from 'react';
import { DefaultProps, MantineShadow } from '@mantine/styles';
import { InputWrapperBaseProps, InputWrapperStylesNames, InputSharedProps, InputStylesNames } from '../Input';
import { PopoverStylesNames } from '../Popover';
import { MantineTransition } from '../Transition';
import { ColorPickerBaseProps, ColorPickerStylesNames } from '../ColorPicker/ColorPicker';
export type ColorInputStylesNames = InputWrapperStylesNames | InputStylesNames | ColorPickerStylesNames | PopoverStylesNames;
export interface ColorInputProps extends InputWrapperBaseProps, InputSharedProps, ColorPickerBaseProps, DefaultProps<ColorInputStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'defaultValue' | 'value'> {
    /** Disallow free input */
    disallowInput?: boolean;
    /** call onChange with last valid value onBlur */
    fixOnBlur?: boolean;
    /** Dropdown element z-index */
    dropdownZIndex?: number;
    /** Display swatch with color preview on the left side of input */
    withPreview?: boolean;
    /** Dropdown transition name or object */
    transition?: MantineTransition;
    /** Dropdown appear/disappear transition duration in ms */
    transitionDuration?: number;
    /** Dropdown transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Dropdown box-shadow, key of theme.shadows */
    shadow?: MantineShadow;
    /** Determines whether eye dropper button should be displayed in the right section, true by default */
    withEyeDropper?: boolean;
    /** Replaces default eye dropper icon */
    eyeDropperIcon?: React.ReactNode;
    /** Determines whether the dropdown should be closed when color swatch is clicked, false by default */
    closeOnColorSwatchClick?: boolean;
}
export declare const ColorInput: React.ForwardRefExoticComponent<ColorInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=ColorInput.d.ts.map