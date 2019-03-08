import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}
const IndexHeader = styled.header`
  min-height: calc(100vh - 52px);
  background: url(${props => props.img});
  filter: grayscale(0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
HomeHeader.defaultProps = {
  img: img,
}
PageHeader.defaultProps = {
  img: img,
}
export { HomeHeader, PageHeader }
