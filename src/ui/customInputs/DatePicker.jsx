import { createContext, memo, useContext, useEffect, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import { getDaysInMonth } from "date-fns";
import styled, { css } from "styled-components";

import { BsCalendar2Date } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ButtonIcon from "../buttons/ButtonIcon";
import FormErrorMsg from "../form/FormErrorMsg";

const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 1.4rem;
  align-items: center;
  padding: 1.2rem 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-200);

  & > span {
    bottom: 0px !important;
    left: calc(35% + 5px);
  }

  @media (max-width: 600px) {
    & {
      > span {
        left: 5px;
      }
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > * {
        width: 100%;
        flex-basis: 100%;
      }
    }
  }

  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Placeholder = styled.span`
  color: ${(props) =>
    props.$isOpen ? "var(--color-brand-600)" : "var(--color-grey-400)"};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.4rem;
  transition: color 0.3s;
`;

const Picker = styled.div`
  position: relative;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & > svg {
    transition: color 0.3s;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  width: fit-content;
  left: 0;
  bottom: 100%;
  background-color: var(--color-grey-200);
  & > div {
    flex-basis: 100%;
    width: 100%;
  }
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  @media (max-width: 500px) {
    width: fit-content;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Day = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: ${(props) =>
    props.$active ? "var(--color-brand-700)" : "var(--color-grey-100)"};
  ${(props) =>
    props.$active &&
    css`
      color: #fafafa;
    `}
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-700);
    color: #fafafa;
  }
`;

const ManipulateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  & > button {
    width: fit-content !important;
  }
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
`;

const DateContext = createContext({
  setter: null,
  isOpen: null,
  setIsOpen: null,
  currentDay: null,
  currentMonth: null,
  currentYear: null,
  currentDate: null,
  setCurrentDay: null,
  setCurrentMonth: null,
  setCurrentYear: null,
  setCurrentDate: null,
  id: null,
});

const DatePicker = memo(function DatePicker({
  id,
  label,
  setter,
  additionalStyle,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    setter?.(currentDate);
  }, [currentDate.getTime()]);

  function setCurrentDay(day) {
    setCurrentDate(new Date(currentYear, currentMonth - 1, day));
  }

  function setCurrentMonth(increase) {
    setCurrentDate((curDate) => {
      const date = new Date(curDate);
      if (increase) {
        date.setMonth(date.getMonth() + 1);
      } else {
        date.setMonth(date.getMonth() - 1);
      }
      return date;
    });
  }

  function setCurrentYear(increase) {
    setCurrentDate((curDate) => {
      const date = new Date(curDate);
      if (increase) {
        date.setFullYear(date.getFullYear() + 1);
      } else {
        date.setFullYear(date.getFullYear() - 1);
      }
      return date;
    });
  }

  return (
    <DateContext.Provider
      value={{
        setter,
        isOpen,
        setIsOpen,
        currentDay,
        setCurrentDay,
        currentYear,
        setCurrentYear,
        currentMonth,
        setCurrentMonth,
        currentDate,
        setCurrentDate,
        id,
      }}
    >
      <Row {...(additionalStyle ? { $additionalStyle: additionalStyle } : {})}>
        {label && (
          <Label
            onClick={() => setIsOpen((state) => !state)}
            role="label"
            id={`label-for-${id}`}
          >
            {label}
          </Label>
        )}
        <Picker
          onClick={(e) => {
            if (!e.target.closest(`#menu-for-${id}`))
              // ignore menu clicks
              setIsOpen((state) => !state);
          }}
          id={id}
          role="input"
        >
          <Placeholder $isOpen={isOpen}>
            {currentDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Placeholder>
          <BsCalendar2Date
            color={`${
              isOpen ? "var(--color-brand-600)" : "var(--color-grey-300)"
            }`}
          />
          {isOpen && <Menu />}
        </Picker>
        {error && <FormErrorMsg>{error}</FormErrorMsg>}
      </Row>
    </DateContext.Provider>
  );
});

const Menu = memo(function Menu() {
  const { currentDay, currentDate, setCurrentDay, setIsOpen, id } =
    useContext(DateContext);
  const days = getDaysInMonth(currentDate);
  const ref = useOutsideClick((e) => {
    // if the clicked was the label or the picker leave the job for it
    if (e.target.closest(`#${id}`) || e.target.id === `label-for-${id}`) return;
    setIsOpen(false);
  });

  function setDay(e) {
    if (e.target.tagName === "SPAN") {
      setCurrentDay(+e.target.innerHTML);
    }
  }

  return (
    <StyledMenu ref={ref} id={`menu-for-${id}`}>
      <Years />
      <Months />
      <DaysContainer onClick={setDay}>
        {Array.from({ length: days }, (_, i) => (
          <Day key={i} $active={i + 1 === currentDay}>
            {i + 1}
          </Day>
        ))}
      </DaysContainer>
    </StyledMenu>
  );
});

const Years = memo(function Years() {
  const { currentYear, setCurrentYear } = useContext(DateContext);

  function increase(e) {
    e.preventDefault();
    setCurrentYear(true);
  }
  function decrease(e) {
    e.preventDefault();
    setCurrentYear(false);
  }

  return (
    <ManipulateContainer>
      <ButtonIcon onClick={decrease}>
        <HiChevronLeft />
      </ButtonIcon>
      <Span>Year: {currentYear}</Span>
      <ButtonIcon onClick={increase}>
        <HiChevronRight />
      </ButtonIcon>
    </ManipulateContainer>
  );
});

const Months = memo(function Months() {
  const { currentMonth, setCurrentMonth, currentDate } =
    useContext(DateContext);
  const details = currentDate.toDateString().split(" ");
  const dayName = details[0];
  const monthName = details[1];

  function increase(e) {
    e.preventDefault();
    setCurrentMonth(true);
  }
  function decrease(e) {
    e.preventDefault();
    setCurrentMonth(false);
  }

  return (
    <ManipulateContainer>
      <ButtonIcon onClick={decrease}>
        <HiChevronLeft />
      </ButtonIcon>
      <Span>
        {dayName} {monthName} {currentMonth}
      </Span>
      <ButtonIcon onClick={increase}>
        <HiChevronRight />
      </ButtonIcon>
    </ManipulateContainer>
  );
});
export default DatePicker;
