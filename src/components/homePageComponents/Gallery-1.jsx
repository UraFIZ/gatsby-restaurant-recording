import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ALL_IMG = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
function Gallery() {
  return (
    <StaticQuery
      query={ALL_IMG}
      render={data => {
        const images = data.getImages.edges
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className={`item item-${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    <p className="info">
                      {index + 1 === 1
                        ? "awsome pizza"
                        : index + 1 === 2
                        ? "awsome met"
                        : "awsome fish "}
                    </p>
                  </div>
                )
              })}
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
