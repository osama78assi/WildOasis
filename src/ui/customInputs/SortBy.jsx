import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import styled, { css } from "styled-components";
import { getRandId } from "../../utils/helpers";

import { HiChevronDown } from "react-icons/hi2";

const StyledSortBy = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 11rem;
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  cursor: pointer;
  z-index: 9;

  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  & > :last-child {
    font-size: 2rem;
  }
  ${(props) =>
    css`
      @media (max-width: ${props.$getMinAt}px) {
        width: 11rem;
      }
    `}
`;

const StyledSelect = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: calc(100% - 1px);
  z-index: 15;
  min-width: 11rem;
  width: 100%;
  font-size: 1.4rem;
  border: 1px solid
    ${(props) =>
      props.$type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  & > :not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledOption = styled.div`
  ${(props) =>
    props.$type === "white"
      ? "var(--color-grey-100)"
      : "var(--color-grey-300)"};
  ${(props) =>
    props.$active
      ? "background-color: var(--color-grey-200);"
      : "background-color: var(--color-grey-0);"}
  &:hover {
    background-color: var(--color-grey-200);
  }
  padding: 0.3rem 1rem;
  ${(props) =>
    css`
      @media (max-width: ${props.$getMinAt}px) {
        width: 11rem;
      }
    `}
`;

const StyledActive = styled.div`
  width: 80%;
  height: 2rem;
  & > span {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
`;

const SortContext = createContext();
let id;

function SortBy({
  options,
  activeLable,
  sortFor,
  type,
  getMinAt = 500,
  children,
}) {
  useEffect(() => {
    id = getRandId(); // generated once for stabel ID
  }, []);
  // you can pass or not an active option
  const [activeOption, setActiveOption] = useState(activeLable);

  // to keep track of the drop down menu if it's open or not
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(handleClickOutSide);

  function handleClickOutSide(e) {
    // if the clicked is the list then handleClick will take care of it
    if (e.target.closest(`#${id}`)) return;
    else handleClick();
  }

  function handleClick() {
    setIsOpen((state) => !state);
  }

  return (
    <SortContext.Provider
      value={{
        options,
        activeOption,
        setActiveOption,
        sortFor,
        type,
        getMinAt,
      }}
    >
      <StyledSortBy
        role="select"
        onClick={() => handleClick()}
        id={id}
        $getMinAt={getMinAt}
      >
        {isOpen && <Select eleRef={ref}>{children}</Select>}
        <StyledActive>
          <span>{activeOption}</span>
        </StyledActive>
        <HiChevronDown />
      </StyledSortBy>
    </SortContext.Provider>
  );
}

function Select({ eleRef, children }) {
  const { type } = useContext(SortContext);

  return (
    <StyledSelect ref={eleRef} $type={type}>
      {children}
    </StyledSelect>
  );
}

function SelectOption({ value, children }) {
  const { activeOption, setActiveOption, sortFor, type, getMinAt } =
    useContext(SortContext);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    if (activeOption === children) {
      // just remove the active option and clear the searchParams
      setActiveOption("");
      searchParams.delete(sortFor);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set(sortFor, value);
    setSearchParams(searchParams);
    setActiveOption(children);
  }

  return (
    <StyledOption
      role="option"
      onClick={() => handleClick()}
      $active={children === activeOption}
      $type={type}
      $getMinAt={getMinAt}
    >
      {children}
    </StyledOption>
  );
}

SortBy.SelectOption = SelectOption;
export default SortBy;
