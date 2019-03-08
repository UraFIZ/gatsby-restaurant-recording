/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import { createGlobalStyle } from "styled-components"
/* import "./layout.css" */
import Navbar from "../components/globals/navbar/Navbar"
const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </Fragment>
  )
}
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  color:  #262626;
  background: #fff;
}
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
