import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contentImg from "../images/bcg/contactBcg.jpeg"
const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contentImg}>
      {" "}
      <Banner title="contact us" subtitle="Let's get in touch" />
    </PageHeader>
  </Layout>
)
export default ContactPage
