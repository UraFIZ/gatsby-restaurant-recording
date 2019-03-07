import React from "react"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi from Gatsby</h1>
  </Layout>
)

export default IndexPage
