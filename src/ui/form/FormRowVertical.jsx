import styled from "styled-components";

import FormErrorMsg from "./FormErrorMsg";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <FormErrorMsg>{error}</FormErrorMsg>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
