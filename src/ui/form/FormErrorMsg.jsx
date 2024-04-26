import styled from "styled-components";

const StyledFormErrorMsg = styled.span`
  width: max-content;
  position: absolute;
  left: 5px;
  bottom: -10px;
  font-style: italic;
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormErrorMsg({ children }) {
  return <StyledFormErrorMsg>{children}</StyledFormErrorMsg>;
}

export default FormErrorMsg;
