import React from "react"
import { styles } from "../utils"
import styled from "styled-components"

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}
Title.defaultProps = {
  message: "our message",
  title: "our title",
}
const TitleWrapper = styled.div`
  text-align: center;
  .message {
    font-family: "Caveat", cursive;
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
