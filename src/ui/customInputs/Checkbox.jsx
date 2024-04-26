import styled from "styled-components";

import { RiCheckFill } from "react-icons/ri";

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Label = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 3px;
`;

const Check = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid var(--color-brand-600);
  border-radius: 0.3rem;
  outline-offset: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) => props.$active && "background-color: var(--color-brand-600);"}
  ${(props) =>
    props.$dis &&
    "background-color: var(--color-grey-300); border-color: var(--color-grey-300); cursor: not-allowed;"}
  & > svg {
    color: var(--color-grey-0);
    font-size: 2rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, children }) {
  return (
    <StyledCheckbox
      onClick={() => {
        if (!disabled) {
          onChange?.();
        }
      }}
    >
      <Check role="input" $active={checked} $dis={disabled}>
        {checked && <RiCheckFill />}
      </Check>
      <Label role="label">{children}</Label>
    </StyledCheckbox>
  );
}

export default Checkbox;
