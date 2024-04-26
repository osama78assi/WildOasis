import { createContext, useContext, useEffect, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import styled, { css } from "styled-components";

import { HiChevronDown } from "react-icons/hi2";
import Input from "../form/Input";

const Context = createContext({
  activeOption: null,
  activeValue: null,
  setActive: null,
  label: null,
  isOpen: null,
  setIsOpen: null,
  setValue: null,
  searchRegex: null,
  setSearchRegex: null,
});

const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0rem 0rem 0.5rem 0rem;
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;
  position: relative;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  min-height: 5rem;
  padding: 1rem;
  border-radius: ${(props) => !props.$open && "var(--border-radius-sm)"};
  ${(props) =>
    props.$pos === "bottom"
      ? css`
          border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
        `
      : props.$pos === "top"
      ? css`
          border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
        `
      : ""}
`;

const Span = styled.span`
  display: block;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: var(--color-grey-400);
`;

const StyledOption = styled.li`
  padding: 0.5rem;
  background-color: ${(props) =>
    props.$act ? "var(--color-grey-300)" : "var(--color-grey-0)"};
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const Ul = styled.ul`
  ${(props) =>
    props.$pos === "" &&
    css`
      display: none;
    `}
  position: absolute;
  width: 100%;
  ${(props) =>
    props.$pos === "bottom" &&
    css`
      top: 100%;
      border-radius: 0px 0px var(--border-radius-sm) var(--border-radius-sm);
      & > :last-child {
        border-radius: 0px 0px var(--border-radius-sm) var(--border-radius-sm);
      }
    `}
  ${(props) =>
    props.$pos === "top" &&
    css`
      bottom: 100%;
      border-radius: var(--border-radius-sm) var(--border-radius-sm) 0px 0px;
      & > :first-child {
        border-radius: var(--border-radius-sm) var(--border-radius-sm) 0px 0px;
      }
    `}
  left: 0;
  z-index: 1;
  max-height: 10rem;
  overflow: auto;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-grey-300);
  & > li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

function DropdownMenu({
  activeOption,
  activeValue,
  label,
  setValue,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(activeOption || label);
  const [searchRegex, setSearchRegex] = useState("");

  useEffect(() => {
    // Sync the active option and value with the state for reset purpose
    setActive(activeOption || label);
    setValue?.(activeValue || "");
  }, [activeValue, activeOption]);

  return (
    <Context.Provider
      value={{
        activeOption: active || label,
        activeValue,
        label,
        isOpen,
        setIsOpen,
        setActive,
        setValue,
        searchRegex,
        setSearchRegex,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function Select({ children }) {
  const { setIsOpen, isOpen, label, activeOption } = useContext(Context);
  const [pos, setPos] = useState("");
  const ref = useOutsideClick(() => {
    setPos("");
    setIsOpen(false);
  }, true);

  function handleClick(e, isLable = false) {
    let selectEle;
    if (!isLable) selectEle = e.target.closest("div");
    else selectEle = e.target.nextSibling;
    e.stopPropagation();
    if (selectEle) {
      const selectCoordinate = selectEle.getBoundingClientRect();
      const { bottom: selectBottom } = selectCoordinate;
      // select top = the space between select and top of viewport
      // select bottom - window height = space between select and bottom of the viewport
      if (window.innerHeight - selectBottom > 100) {
        if (!isOpen) {
          setPos("bottom");
          setIsOpen(true);
        } else {
          setPos("");
          setIsOpen(false);
        }
      } else {
        if (!isOpen) {
          setPos("top");
          setIsOpen(true);
        } else {
          setPos("");
          setIsOpen(false);
        }
      }
    }
  }

  return (
    <>
      {label && (
        <Label onClick={(e) => handleClick(e, true)} role="label">
          {label}
        </Label>
      )}
      <StyledSelect
        $open={isOpen}
        ref={ref}
        $pos={pos}
        role="select"
        onClick={handleClick}
      >
        <Span>{activeOption}</Span>
        {isOpen && <Ul $pos={pos}>{children}</Ul>}
        <HiChevronDown />
      </StyledSelect>
    </>
  );
}

function Option({ value, children }) {
  const { activeOption, setValue, setActive, searchRegex } =
    useContext(Context);

  const searchedAbleValue = children?.replaceAll(" ", "");

  function setter(e) {
    setActive(children);
    setValue?.(value, e);
  }

  if (searchRegex === "") {
    return (
      <StyledOption
        $act={activeOption === children}
        role="option"
        onClick={(e) => setter(e)}
      >
        {children}
      </StyledOption>
    );
  }

  if (searchRegex.test(searchedAbleValue)) {
    return (
      <StyledOption
        $act={activeOption === children}
        role="option"
        onClick={(e) => setter(e)}
      >
        {children}
      </StyledOption>
    );
  }

  return null;
}

function SearchInput({ placeholder, id, name }) {
  const { setSearchRegex } = useContext(Context);
  const [val, setVal] = useState("");

  function search(e) {
    let finall = e.target.value;
    if (/\W/.test(finall)) return;
    const regex = new RegExp(`\\b${finall}`, "i");
    setVal(finall);
    setSearchRegex(regex);
  }

  return (
    <Input
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={search}
      value={val}
    />
  );
}

DropdownMenu.Select = Select;
DropdownMenu.SearchInput = SearchInput;
DropdownMenu.Option = Option;
export default DropdownMenu;
