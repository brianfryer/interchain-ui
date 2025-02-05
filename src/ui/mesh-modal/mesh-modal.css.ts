import { style, createVar } from "@vanilla-extract/css";
import { themeVars } from "../../styles/themes.css";
import { baseButton } from "../button/button.css";

export const connectModalShadowVar = createVar();
export const connectModalBgVar = createVar();

const modalContentBase = style([
  style({
    boxShadow: connectModalShadowVar,
    backgroundColor: connectModalBgVar,
    maxHeight: "100%",
    overflow: "auto !important",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    borderRadius: themeVars.radii["xl"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: themeVars.colors.divider,
    selectors: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  }),
]);

export const modalContent = style([
  modalContentBase,
  {
    vars: {
      [connectModalBgVar]: themeVars.colors.cardBg,
      [connectModalShadowVar]:
        "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px",
    },
  },
]);

export const modalBackdropBg = style({
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: `100%`,
  height: `100%`,
  opacity: 0.99,
  backgroundColor: themeVars.colors.gray900,
  backdropFilter: "blur(7px) opacity(10%)",
});

export const modalChildren = style([
  {
    minWidth: themeVars.space.containerSm,
    paddingLeft: themeVars.space["14"],
    paddingRight: themeVars.space["14"],
    paddingBottom: themeVars.space["12"],
  },
]);

export const modalHeader = style({
  position: "relative",
  paddingTop: themeVars.space["14"],
  paddingLeft: themeVars.space["14"],
  paddingRight: themeVars.space["14"],
  paddingBottom: "0",
});

export const modalCloseButton = style([
  baseButton,
  {
    position: "absolute",
    top: themeVars.space["14"],
    right: themeVars.space["14"],
    color: "#DAD5E3",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    background: "transparent",
  },
]);
