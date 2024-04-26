import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.$txt === "left"
      ? css`
          width: fit-content;
          margin-right: auto;
        `
      : ""}
  
  line-height: 1.4;
  ${(props) =>
    props.$align
      ? css`
          text-align: ${props.$align};
        `
      : ""}
`;

export default Heading;
