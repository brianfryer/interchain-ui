import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles as s } from "../../styles/sprinkles.css";
import { themeVars } from "../../styles/themes.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export const containerStyle = style([
  {
    cursor: "pointer",
    position: "relative",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderStyle: "solid",
    minHeight: "fit-content",
    paddingInlineStart: themeVars.space[4],
    paddingInlineEnd: themeVars.space[4],
  },
  s({
    py: "1",
    width: "full",
    height: "auto",
    minHeight: "12",
    borderRadius: "full",
    fontSize: "sm",
    fontWeight: "normal",
    lineHeight: "normal",
    borderColor: {
      light: "gray200",
      dark: "whiteAlpha300",
    },
    color: {
      light: "gray500",
      dark: "whiteAlpha600",
    },
  }),
]);

export const textStyle = style([
  {
    color: "inherit",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  s({
    marginRight: "4",
  }),
]);

export const iconStyle = styleVariants({
  idle: [style({ color: "inherit" })],
  copied: [s({ color: { light: "green300", dark: "green400" } })],
});