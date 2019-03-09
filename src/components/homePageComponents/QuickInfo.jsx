import React, { Component } from "react"
import { Section, Title, SectioonButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus quae sapiente atque ea nostrum, dolores tempore quidem
            deleniti rerum pariatur nam assumenda molestiae quod, neque dolor
            nemo omnis, et quibusdam. Eum vero voluptates officia, enim nemo
            consequatur assumenda aliquid quo tenetur facere sunt eveniet
            voluptatibus harum id voluptas expedita mollitia accusamus itaque
            illo tempora molestiae hic placeat. Animi, a? Ex, iusto aliquid
            consequatur tenetur ab accusamus recusandae repellat. Iste? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Natus, molestiae
            optio, fugit aut debitis iusto cumque provident nemo perferendis
            officiis distinctio. Aspernatur, temporibus cum adipisci, harum
            animi accusamus placeat iste at illum, commodi excepturi assumenda
            libero voluptas. Ad, vero suscipit?
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis
            quis eligendi maiores odit architecto facilis quia nihil. Dolores
            voluptate unde velit expedita accusantium necessitatibus voluptas
            dolorem! Autem voluptas cumque quo voluptatum repellat possimus modi
            similique fugit mollitia? Hic minus nostrum esse laudantium incidunt
            quo illo pariatur voluptas dolorem praesentium.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }} />
          <SectioonButton style={{ margin: "2rem auto" }}>About</SectioonButton>
        </QuickInfoWrapper>
      </Section>
    )
  }
}
const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
