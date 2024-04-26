import { useRefetchData } from "../hooks/useRefetchData";

import styled, { css } from "styled-components";

import { BiError } from "react-icons/bi";
import Refetch from "./loading/Refetch";

const Div = styled.div`
  border-radius: var(--border-radius-lg);
  background-color: var(--color-danger-bc);
  padding: 1rem 2rem;
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

const HeaderP = styled.p`
  position: relative;
  border-radius: 0.5rem;
  z-index: 1;
  font-size: 2rem;
`;

const ErrorContainer = styled.div`
  background-color: var(--color-danger-bc);
  color: var(--color-danger-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  gap: 1rem;

  & > svg {
    font-size: 4.5rem;
  }
`;

const RefetchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding: 1rem 2rem;

  & > :before {
    content: "";
    display: block;
    position: absolute;
    top: 0rem;
    left: 1rem;
    width: 1px;
    height: calc(100% + 1rem);
    background-color: var(--color-danger-color);
  }

  & > :after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -2rem;
    background-color: var(--color-danger-color);
    width: calc(100% + 4rem);
    height: 1px;
  }
`;

const RefetchButton = styled.button`
  background-color: var(--color-danger-300);
  color: var(--color-danger-100);
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: var(--border-radius-sm);

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover {
    background-color: var(--color-danger-500);
  }
`;

const ReloadContainer = styled.div`
  color: var(--color-danger-color);
  display: flex;
  justify-cotent: space-between;
  align-items: center;
  & > button {
    cursor: initial;
    & > svg {
      color: var(--color-danger-color) !important;
    }
  }
`;

function ErrorMsg({ queryKey, additionalStyle, faildFor }) {
  const { reFetch, isFetching } = useRefetchData(queryKey);
  return (
    <Div {...(additionalStyle ? { $additionalStyle: additionalStyle } : {})}>
      <ErrorContainer>
        <HeaderP>
          Something went wrong, Faild to load the {faildFor || "data"}
        </HeaderP>
        <BiError />
      </ErrorContainer>

      <RefetchContainer>
        <ReloadContainer>
          <p>
            Try to refetch the {faildFor || "data"} from the button, if it
            didn&apos;t work try to reload the page
          </p>
          <Refetch isFetching={isFetching} />
        </ReloadContainer>
        <RefetchButton
          onClick={(e) => {
            e.preventDefault();
            reFetch();
          }}
          disabled={isFetching}
        >
          Refetch
        </RefetchButton>
      </RefetchContainer>
    </Div>
  );
}

export default ErrorMsg;
