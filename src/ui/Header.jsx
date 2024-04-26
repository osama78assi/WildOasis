import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  position: relative;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  box-shadow: 1px 1px 10px #33333357;
  z-index: 29;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;
  & > div svg {
    color: var(--color-brand-600);
  }
  @media (max-width: 500px) {
    & {
      padding: 1.2rem 1.8rem;
      gap: 2px;
    }
  }
  @media (max-width: 700px) {
    & [data-list="user"] > :first-child {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    & [data-list="user"] > :last-child {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    & [data-list="user"] :not(:first-child):not(:last-child) {
      border-radius: 0px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader id="navbar">
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
