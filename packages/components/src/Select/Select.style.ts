import glamorous, { GlamorousComponent } from "glamorous"
import { readableTextColor, spin, fadeIn, resetTransform } from "@operational/utils"
import { Theme, expandColor } from "@operational/theme"
import * as mixins from "../utils/mixins"

export interface IContainerProps {
  id?: string
  color?: string
  disabled: boolean
  style?: {}
  role?: string
  tabIndex?: number
  onClick?: () => void
}

const Container: GlamorousComponent<IContainerProps, {}> = glamorous.div(
  ({ theme, color, disabled, style }: IContainerProps & { theme: Theme }): {} => {
    const backgroundColor = expandColor(theme, color) || theme.colors.white

    return {
      backgroundColor,
      label: "select",
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing * 2 / 3,
      borderRadius: 4,
      paddingRight: theme.spacing / 2 + 40,
      width: "fit-content",
      minWidth: 240,
      minHeight: 20,
      border: "1px solid",
      borderColor: "rgb(208, 217, 229)",
      opacity: disabled ? 0.5 : 1,
      cursor: "pointer",
      color: readableTextColor(backgroundColor, ["black", "white"]),
      outline: "none",
      pointerEvents: disabled ? "none" : "all",

      // downward caret.
      "&::after": {
        content: "''",
        position: "absolute",
        top: "50%",
        right: theme.spacing / 2,
        width: 0,
        height: 0,
        border: "4px solid transparent",
        borderTopColor: theme.colors.gray70,
        transform: "translateY(calc(-50% + 2px))"
      },

      "&:focus": mixins.inputFocus({ theme })
    }
  }
)

export interface IDisplayValueProps {
  isPlaceholder: boolean
}

const DisplayValue: GlamorousComponent<IDisplayValueProps, {}> = glamorous.div(
  ({ theme, isPlaceholder }: IDisplayValueProps & { theme: Theme }): {} => ({
    color: isPlaceholder ? theme.colors.gray60 : theme.colors.black
  })
)

const Options: GlamorousComponent<{}, {}> = glamorous.div(
  {
    position: "absolute",
    // Push it down 6px so it doesn't overlap with the focus shadow,
    // and there's a comfortable 2px gap.
    top: "calc(100% + 6px)",
    left: 0,
    width: "100%",
    overflow: "hidden",
    borderRadius: 4,
    opacity: 0,
    transform: "translateY(-10px)",
    animation: `${fadeIn} .15s forwards ease,
    ${resetTransform} .15s forwards ease`
  },
  ({ theme }: { theme: Theme }): {} => ({
    boxShadow: theme.shadows.popup,
    zIndex: theme.baseZIndex + 100
  })
)

const OptionsList: GlamorousComponent<{}, {}> = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  // whole number + 3/4 ratio here ensures options don't get cut off
  maxHeight: theme.spacing * 12.75,
  overflow: "auto"
}))

export { Container, Options, OptionsList, DisplayValue }
