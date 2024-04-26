import styled, { css } from "styled-components";

const Span = styled.span`
  width: max-content;
  line-height: normal;
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

export default Span;
