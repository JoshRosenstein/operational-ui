import * as React from "react"
import glamorous, { GlamorousComponent } from "glamorous"
import { css } from "glamor"
import { fadeIn } from "@operational/utils"
import { Theme } from "@operational/theme"

export interface Props {
  id?: string | number
  css?: {}
  menuCss?: {}
  className?: string
  children: React.ReactNode
  open?: boolean
  onClick?: () => void
  onOutsideClick?: () => void
  keepOpenOnItemClick?: boolean
}

export interface State {
  isOpen: boolean
}

const Container = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  label: "contextmenu",
  cursor: "pointer",
  position: "relative",
  width: "fit-content"
}))

const MenuContainer = glamorous.div(({ theme, isExpanded }: { theme: Theme; isExpanded: boolean }): {} => ({
  position: "absolute",
  top: `calc(100% + ${theme.spacing / 2}px)`,
  left: -theme.spacing,
  boxShadow: theme.shadows.popup,
  width: "fit-content",
  ...isExpanded ? { display: "block", animation: `${fadeIn} ease-in-out forwards 0.2s` } : { display: "none" }
}))

export default class ContextMenu extends React.Component<Props, State> {
  state = {
    isOpen: false
  }

  containerNode: any
  menuContainerNode: any
  outsideClickHandler: any

  handleClick = (ev: any): void => {
    const isTargetInsideMenu = this.menuContainerNode.contains(ev.target)
    const isTargetInsideContainer = this.containerNode.contains(ev.target)
    if (!isTargetInsideContainer && this.props.onOutsideClick) {
      this.props.onOutsideClick()
    }
    if (isTargetInsideContainer && this.props.onClick) {
      this.props.onClick()
    }
    const newIsActive = isTargetInsideMenu ? this.state.isOpen : isTargetInsideContainer ? !this.state.isOpen : false
    this.setState(prevState => ({
      isOpen: newIsActive
    }))
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  render() {
    const menuItems: any = []
    const children: any = []
    React.Children.forEach(this.props.children, (child: any, index: number): void => {
      if (child.props && child.props.__isContextMenuItem) {
        const { onClick } = child.props
        menuItems.push(
          React.cloneElement(child, {
            key: "contextmenu-" + index,
            onClick:
              onClick &&
              (() => {
                if (!this.props.keepOpenOnItemClick) {
                  this.setState(prevState => ({
                    isOpen: false
                  }))
                }
                onClick()
              })
          })
        )
      } else {
        children.push(child)
      }
    })

    return (
      <Container
        innerRef={node => {
          this.containerNode = node
        }}
        key={this.props.id}
        css={this.props.css}
        className={this.props.className}
      >
        {children}
        <MenuContainer
          css={this.props.menuCss}
          innerRef={node => {
            this.menuContainerNode = node
          }}
          isExpanded={this.props.open || this.state.isOpen}
        >
          {menuItems}
        </MenuContainer>
      </Container>
    )
  }
}