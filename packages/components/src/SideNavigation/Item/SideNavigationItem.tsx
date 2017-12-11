import * as React from "react"
import glamorous, { GlamorousComponent } from "glamorous"
import { Theme } from "@operational/theme"

export interface IProps {
  id?: string | number
  className?: string
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  css?: any
  theme?: Theme
}

const Container = glamorous.div(({ theme, active }: IProps): {} => {
  const activeBackgroundColor = "rgba(0, 0, 0, 0.2)"
  const hoverBackgroundColor = "rgba(255, 255, 255, 0.07)"
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 2,
    width: "fit-content",
    minHeight: 40,
    cursor: "pointer",
    backgroundColor: active ? activeBackgroundColor : "transparent",
    minWidth: "100%",
    whiteSpace: "pre",

    ":hover": {
      backgroundColor: active ? activeBackgroundColor : hoverBackgroundColor
    },

    ":first-child": {
      marginTop: 0
    }
  }
})

const SideNavigationItem = (props: IProps) => (
  <Container key={props.id} css={props.css} className={props.className} active={!!props.active} onClick={props.onClick}>
    {props.children}
  </Container>
)

export default SideNavigationItem