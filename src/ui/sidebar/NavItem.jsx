import styled from "styled-components";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    max-width: 100%;
    min-width: max-content;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: ${(props) => props.$bc};
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function NavItem({
  to,
  Icon,
  children,
  dataCollapse,
  bc = "var(--color-grey-50)",
}) {
  return (
    <li {...(dataCollapse ? { "data-collapse": dataCollapse } : {})}>
      <StyledNavLink to={to} $bc={bc}>
        <Icon />
        <span>{children}</span>
      </StyledNavLink>
    </li>
  );
}

export default NavItem;
