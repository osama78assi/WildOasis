import styled, { css } from "styled-components";

import Button from "../buttons/Button";

const TogglerButton = styled(Button)`
  ${(props) =>
    props.$border &&
    css`
      border-color: ${props.$border};
    `}
  position: absolute;
  ${(props) =>
    props.$direction === "right"
      ? css`
          right: 10px;
        `
      : css`
          left: 10px;
        `};
  ${(props) =>
    props.$header === true
      ? css`
          top: 50%;
          transform: translateY(-50%);
        `
      : css`
          top: 0.5rem;
        `}
  padding: 0.5rem;
  font-size: 2.4rem;
  color: ${(props) => props.$text || css`var(--color-grey-0)`};
  background-color: ${(props) => props.$bg || css`var(--color-brand-700)`};

  &:hover {
    background-color: ${(props) =>
      props.$bghover || css`var(--color-brand-500)`};
  }

  &:focus {
    border: 1px solid ${(props) => props.$bf || css`var(--color-brand-500)`};
    outline: none;
  }

  ${(props) =>
    props.$shadow &&
    css`
      box-shadow: ${props.$shadow};
    `}
`;

export default TogglerButton;
