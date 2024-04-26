import { css, styled } from "styled-components";

import FormErrorMsg from "./FormErrorMsg";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 1.4rem;
    }
  }
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

const Label = styled.label`
  font-weight: 500;
`;

const InputContainer = styled.div`
  position: relative;
  padding-bottom: 10px;
`;

function FormRow({
  label,
  error,
  withError = false,
  additionalStyle,
  children,
}) {
  return (
    <StyledFormRow
      {...(additionalStyle ? { $additionalStyle: additionalStyle } : {})}
    >
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {withError && (
        <InputContainer>
          {children}
          {error && <FormErrorMsg>{error}</FormErrorMsg>}
        </InputContainer>
      )}
      {!withError && <>{children}</>}
    </StyledFormRow>
  );
}

export default FormRow;
