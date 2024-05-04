import { getColorValue } from './get-color-value';
import { getDefaultValue } from './get-default-value';
import { getFontSizeValue } from './get-font-size-value';
import { getSpacingValue } from './get-spacing-value';
export declare const valueGetters: {
    color: typeof getColorValue;
    default: typeof getDefaultValue;
    fontSize: typeof getFontSizeValue;
    spacing: typeof getSpacingValue;
};
export type SystemValueType = keyof typeof valueGetters;
//# sourceMappingURL=value-getters.d.ts.map