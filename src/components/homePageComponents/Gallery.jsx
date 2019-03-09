import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">awsome pizza</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">awsome pizza</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">awsome pizza</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "item-1 item-1 item-2 item-2"
      "item-1 item-1 item-3 item-3";
    .item-1 {
      grid-area: item-1;
    }
    .item-2 {
      grid-area: item-2;
    }
    .item-3 {
      grid-area: item-3;
    }
  }
`
export default Gallery
