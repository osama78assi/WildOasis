import styled, { css } from "styled-components";

const FormSelectRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;
  gap: ${(props) => (props.$input ? "0.5rem" : "1.5rem")};
  ${(props) =>
    !props.$input &&
    css`
      padding-bottom: 2.4rem;
      border-bottom: 1px solid var(--color-grey-200);
    `}

  & > span:last-of-type {
    bottom: 0px !important;
  }

  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

export default FormSelectRow;
