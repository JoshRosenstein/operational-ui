import { keyframes } from "@emotion/core"

import { dangerousTooltipContainerClassName } from "../Tooltip/Tooltip"
import { lighten } from "../utils"
import styled from "../utils/styled"
import { OperationalStyleConstants } from "./constants"
import styled from "./styled"

export const inputFocus = ({ theme, isError }: { theme: OperationalStyleConstants; isError?: boolean }) => ({
  outline: 0,
  border: "1px solid",
  borderColor: isError ? theme.color.error : theme.color.primary,
  boxShadow: `0 0 0 3px ${isError ? lighten(theme.color.error, 60) : lighten(theme.color.primary, 40)}`,
})

export const Label = styled("label")<{ fullWidth?: boolean; left?: boolean }>(({ fullWidth, theme, left }) => ({
  display: "inline-block",
  position: "relative",
  maxWidth: fullWidth ? "none" : "360px",
  width: fullWidth ? "100%" : "auto",
  marginRight: left ? theme.space.small : 0,
}))

export const FormFieldControls = styled("div")({
  position: "absolute",
  top: -2,
  right: 0,
})

export const hoverTooltip: {} = {
  [`.${dangerousTooltipContainerClassName}`]: {
    visibility: "hidden",
    pointerEvents: "none",
  },
  ":hover": {
    [`.${dangerousTooltipContainerClassName}`]: {
      visibility: "visible",
      pointerEvents: "all",
    },
  },
}

export const FormFieldControl = styled("div")(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  verticalAlign: "middle",
  display: "inline-flex",
  width: 12,
  marginLeft: theme.space.base,
  color: theme.color.text.lightest,
  height: 12,
  ...hoverTooltip,
  "& svg": {
    position: "relative",
  },
  ":hover": {
    color: theme.color.text.default,
  },
  " *": {
    pointerEvents: "none",
  },
}))

export const FormFieldError = styled("div")(({ theme }) => ({
  fontSize: theme.font.size.fineprint,
  color: theme.color.error,
  padding: `${theme.space.base / 2}px ${theme.space.medium}px`,
  marginBottom: 0,
  width: "100%",
  borderBottomLeftRadius: theme.borderRadius,
  borderBottomRightRadius: theme.borderRadius,
  border: `1px solid ${theme.color.error}`,
  borderTop: 0,
  transform: "translate3d(0, 100%, 0)",
  position: "absolute",
  backgroundColor: lighten(theme.color.error, 60),
  boxShadow: `0px 3px 5px #d3d1d3`,
  // Nudge up just a little bit to look blended into the form
  bottom: 2,
  left: 0,
  zIndex: theme.zIndex.formFieldError,
}))

export const floatIn = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, -6px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
  },
})

export const resetTransform = keyframes({
  to: {
    transform: "none",
  },
})

export const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(359deg)",
  },
})
