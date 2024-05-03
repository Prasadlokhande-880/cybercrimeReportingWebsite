'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');
var Thumb_styles = require('../Thumb/Thumb.styles.js');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const SATURATION_HEIGHTS = {
  xs: 100,
  sm: 110,
  md: 120,
  lg: 140,
  xl: 160
};
var useStyles = styles.createStyles((theme, { size }, getRef) => ({
  saturationThumb: {
    ref: getRef("saturationThumb")
  },
  saturation: {
    boxSizing: "border-box",
    position: "relative",
    height: theme.fn.size({ size, sizes: SATURATION_HEIGHTS }),
    borderRadius: theme.radius.sm,
    margin: theme.fn.size({ size, sizes: Thumb_styles.THUMB_SIZES }) / 2,
    WebkitTapHighlightColor: "transparent",
    [`&:focus .${getRef("saturationThumb")}`]: __spreadValues({}, theme.focusRing === "always" || theme.focusRing === "auto" ? theme.focusRingStyles.styles(theme) : theme.focusRingStyles.resetStyles(theme)),
    [`&:focus:not(:focus-visible) .${getRef("saturationThumb")}`]: __spreadValues({}, theme.focusRing === "auto" || theme.focusRing === "never" ? theme.focusRingStyles.resetStyles(theme) : null)
  },
  saturationOverlay: __spreadValues({
    boxSizing: "border-box",
    borderRadius: theme.radius.sm
  }, theme.fn.cover(-theme.fn.size({ size, sizes: Thumb_styles.THUMB_SIZES }) / 2 - 1))
}));

exports.default = useStyles;
//# sourceMappingURL=Saturation.styles.js.map
