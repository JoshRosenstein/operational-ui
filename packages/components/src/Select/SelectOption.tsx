import * as React from "react"
import glamorous, { withTheme, GlamorousComponent } from "glamorous"
import { Theme, expandColor } from "@operational/theme"
import { readableTextColor, darken } from "@operational/utils"

import { X } from "react-feather"

export interface Props {
  id?: number | string
  css?: any
  className?: string
  selected?: boolean
  onClick?: () => void
  children?: React.ReactNode
  color?: string
}

export interface PropsWithTheme extends Props {
  theme: Theme
}

const Container = glamorous.div(
  ({ theme, color, selected }: { theme: Theme; color?: string; selected: boolean }): any => {
    const backgroundColor = expandColor(theme, color) || theme.colors.white

    return {
      backgroundColor,
      label: "selectoption",
      position: "relative",
      padding: theme.spacing / 2,
      wordWrap: "break-word",
      color: readableTextColor(backgroundColor, ["black", "white"]),
      outline: "none",

      ":hover": {
        backgroundColor: darken(backgroundColor, 5),
        color: readableTextColor(darken(backgroundColor, 5), ["black", "white"])
      },

      "&:not(:first-child)": {
        borderTop: "1px solid",
        borderColor: darken(backgroundColor, 10)
      }
    }
  }
)

const IconContainer = glamorous.div(({ theme }: { theme: Theme }): any => ({
  width: 8,
  height: 8,
  position: "absolute",
  top: "50%",
  right: 4,
  transform: "translate3d(-50%, -50%, 0)"
}))

const SelectOption = (props: PropsWithTheme) => (
  <Container
    key={props.id}
    css={props.css}
    className={props.className}
    selected={!!props.selected}
    color={props.color}
    tabIndex={-2}
    role="option"
    aria-selected={props.selected}
    onClick={props.onClick}
  >
    {props.children}
    {props.selected ? (
      <IconContainer>
        <X size={props.theme.spacing} />
      </IconContainer>
    ) : null}
  </Container>
)

const WrappedSelectOption: React.SFC<Props> = withTheme(SelectOption)

export default WrappedSelectOption
