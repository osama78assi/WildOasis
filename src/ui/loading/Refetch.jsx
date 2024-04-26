import styled, { css, keyframes } from "styled-components";

import { FaSyncAlt } from "react-icons/fa";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Button = styled.button`
  display: flex;
  padding: 0 1rem;
  justify-content: end;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-grey-900);
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    outline-offset: 0px;
  }

  ${(props) =>
    props.$isFetching &&
    css`
      & > svg {
        animation: ${rotate} ${props.$time || 1000}ms infinite linear;
      }
    `}
`;

function Refetch({ onClick, isFetching, time, color, fontSize, disabled }) {
  return (
    <Button
      onClick={() => {
        onClick?.();
      }}
      disabled={disabled}
      $isFetching={isFetching}
      $time={time}
    >
      <FaSyncAlt
        fontSize={fontSize ? fontSize : "1.5rem"}
        color={color ? color : "var(--color-grey-600)"}
      />
    </Button>
  );
}

export default Refetch;
