import React from 'react';
import { MantineTheme } from '@mantine/styles';
export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';
export interface DrawerStylesParams {
    position: DrawerPosition;
    size: number | string;
    zIndex: React.CSSProperties['zIndex'];
    withOverlay: boolean;
}
declare const _default: (params: DrawerStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        closeButton: string;
        overlay: string;
        body: string;
        root: string;
        drawer: string;
        title: string;
        header: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Drawer.styles.d.ts.map