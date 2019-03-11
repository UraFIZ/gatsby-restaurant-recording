import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Section, Title, SectioonButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
function Menu() {
  return (
    <div>
      <Section>
        <Title title="featured items" message="little taste" />
        <ProdactList>
          <StaticQuery
            query={PRODUCTS}
            render={data => {
              const products = data.items.edges
              return products.map(item => (
                <div key={item.node.id} className="container">
                  <Img fixed={item.node.image.fixed} className="img" />
                  <div className="text">
                    <div className="product-content">
                      <h3 className="name">{item.node.name}</h3>
                      <h3 className="price">{item.node.price}</h3>
                    </div>
                    <p className="info"> {item.node.ingredients}</p>
                  </div>
                </div>
              ))
            }}
          />
        </ProdactList>
      </Section>
    </div>
  )
}
const ProdactList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    grid-template-columns: 6fr 6fr;
    grid-gap: 1rem;
  }
  @media (min-width: 776px) {
    .container {
      display: flex;
    }
    .img {
      display: flex;
      width: 35%;
      margin-right: 0.5rem;
    }
    .text {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .product-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .info {
      text-align: left;
    }
  }
  /*  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    box-sizing: border-box;
  }  */

  .img {
    border-radius: 0.5rem;
  }
  .prodact-content {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    font-size: 1.4rem;
    font-weight: 900;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
    font-size: 0.9rem;
  }
`

export default Menu
