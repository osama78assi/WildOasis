import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.$type === "regular" &&
    css`
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  padding: 2.4rem 4rem;
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 500px) {
    & {
      padding: 1.2rem 2rem;
    }
  }
`;

Form.defaultProps = {
  $type: "regular",
};
export default Form;
