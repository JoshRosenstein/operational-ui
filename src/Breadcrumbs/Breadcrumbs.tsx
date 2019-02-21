import * as React from "react"
import { DefaultProps } from "../types"
import styled from "../utils/styled"

export interface BreadcrumbsProps extends DefaultProps {
  /** Children as `Breadcrumb` elements */
  children?: React.ReactNode
}

const Container = styled("div")({
  label: "breadcrumbs",
  "& > *": {
    display: "inline-block",
  },
  "& a": {
    textDecoration: "none",
    color: "inherit",
  },
})

const Slash = styled("span")(({ theme }) => ({
  display: "inline-block",
  margin: `0 ${theme.space.medium}px`,
  color: theme.color.text.lightest,
  ":first-child": {
    marginLeft: 0,
  },
}))

/**
 * Intersperse slashes between the children (`<Breadcrumb />` elements)
 * Curried first argument is necessary to give unique auto-incrementing
 *  keys to the slash elements.
 */

const intersperseSlashes = (index: number) => ([head, ...tail]: React.ReactNode[]): React.ReactNode[] =>
  head ? [<Slash key={`divider-${index}`}>/</Slash>, head, ...intersperseSlashes(index + 1)(tail)] : []

const Breadcrumbs: React.SFC<BreadcrumbsProps> = props => (
  <Container {...props}>{intersperseSlashes(0)(React.Children.toArray(props.children))}</Container>
)

export default Breadcrumbs
