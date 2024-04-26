import styled, { css } from "styled-components";

const ContainerElement = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  justify-content: space-between;
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

export default ContainerElement;
