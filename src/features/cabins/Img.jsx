import styled, { css } from "styled-components";

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

export default Img;
