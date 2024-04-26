import { css, styled } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
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


function FormRowButtons({ additionalStyle, children }) {
  return (
    <StyledFormRow
      {...(additionalStyle ? { $additionalStyle: additionalStyle } : {})}
    >
      {children}
    </StyledFormRow>
  );
}

export default FormRowButtons;
