import styled, { css, keyframes } from "styled-components";

const flashing = keyframes`
  from {
    background-color: var(--color-from);
  }
  to {
    background-color: var(--color-to);
  }
`;

const StyledLoadingDiv = styled.div`
  background-color: var(--color-from);
  overflow: hidden;
  border-radius: 0.5rem;
  height: 2rem;

  animation: ${flashing}
    ${(props) => (props.$duration ? props.$duration : 1000)}ms linear
    ${(props) => props.$cooldown || 0}ms infinite alternate;
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

function LoadingDiv({ additionalStyle, duration, cooldown }) {
  return (
    <StyledLoadingDiv
      $additionalStyle={additionalStyle}
      $duration={duration}
      $cooldown={cooldown}
    />
  );
}

export default LoadingDiv;
