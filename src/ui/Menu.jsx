import {
  cloneElement,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

import styled, { css } from "styled-components";

import { HiEllipsisVertical } from "react-icons/hi2";
import Span from "./Span";

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);

  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  z-index: 10;
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-full);
  border-radius: var(--border-radius-md);

  ${(props) => {
    if (props.$position.toLowerCase() == "bottom-left")
      return css`
        right: 35px;
        bottom: -${props.$height}px;
      `;
    else if (props.$position.toLowerCase() == "top-left")
      return css`
        right: 35px;
        top: -${props.$height}px;
      `;
    else if (props.$position == "center-left") {
      return css`
        right: 35px;
        top: -${props.$height / 2};
      `;
    }
  }}

  &>li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  & > :first-child > button {
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
  }
  & > :last-child > button {
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
  }
  & > :only-child > button {
    border-radius: var(--border-radius-sm);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 1.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  line-height: normal;
  display: flex;
  column-gap: 1rem;
  align-items: center;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext({ id: null, isOpen: null, setIsOpen: null });

function Menu({ id, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ id, isOpen, setIsOpen }}>
      <StyledMenu data-contain={id}>{children}</StyledMenu>
    </MenuContext.Provider>
  );
}

function Toggle({ disabled = false }) {
  const { setIsOpen, id } = useContext(MenuContext);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <StyledToggle
      onClick={(e) => handleClick(e)}
      data-close={id}
      disabled={disabled}
    >
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ children, position = "bottom-left" }) {
  const { isOpen, setIsOpen, id } = useContext(MenuContext);
  const [height, setHeight] = useState(0);
  const handleClose = (e) => {
    // if I set directly the open state to false and it's open
    // then the toggle handler will keep it open so here check if the clicked
    // the toggler it's handler will take care of this part
    // that's also why the useOutsideClick hook pass the event to
    // the handler that you pass to it
    e.target.closest("button")?.dataset?.close != id && setIsOpen(false);
  };
  const ref = useOutsideClick(handleClose);
  // because the nature of this hook
  // (runs before the element get painted on the screen)
  useLayoutEffect(() => {
    if (document.querySelector(`[data-list='${id}']`))
      setHeight(document.querySelector(`[data-list='${id}']`).clientHeight);
  }, [isOpen, id]);
  return isOpen
    ? createPortal(
        <StyledList
          ref={ref}
          $position={position}
          $height={height}
          data-list={id}
        >
          {children}
        </StyledList>,
        document.querySelector(`div[data-contain='${id}']`)
      )
    : null;
}

function Button({
  children,
  Icon,
  disabled,
  onClick,
  options: { presentation = false, hideWhenClick = true } = {},
}) {
  const { setIsOpen } = useContext(MenuContext);

  function handleClick() {
    setIsOpen(false);
    onClick?.();
  }

  return !presentation ? (
    <li>
      <StyledButton onClick={handleClick} disabled={disabled}>
        {Icon !== undefined && <Icon />}
        <Span>{children}</Span>
      </StyledButton>
    </li>
  ) : (
    <>
      {cloneElement(
        children,
        hideWhenClick ? { onClick: handleClick } : { onClick }
      )}
    </>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
