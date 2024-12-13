import { cloneElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  border-radius: var(--border-radius-sm);
  > :first-child {
    width: ${(props) => props.$parent}%;
    flex-basis: ${(props) => props.$parent}%;
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    &:focus,
    &:focus-visible {
      outline: none;
      outline-offset: -1px;
    }
  }
`;

const ControlShow = styled.div`
  flex-basis: ${(props) => props.$child}%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-left: none;
  border-radius: 0px var(--border-radius-sm) var(--border-radius-sm) 0px;
  color: ${(props) =>
    props.$dis ? "var(--color-grey-200)" : "var(--color-grey-500)"};
  box-shadow: var(--shadow-sm);
  cursor: ${(props) => (props.$dis ? "not-allowed" : "pointer")};
`;

function Password({ disabled, children, options = { parent: 95, child: 5 } }) {
  const [isShowPass, setIsShowPass] = useState(false);
  const inputRef = useRef(null);

  function handleShow() {
    setIsShowPass((state) => !state);
  }

  useEffect(() => {
    const ele = inputRef.current;

    // When foucs mark the parent not the input
    function handlerFocus() {
      if (ele.closest("div")) {
        ele.closest("div").style.outline = "2px solid var(--color-brand-600)";
      }
    }

    // When blur make it for the parent
    function handlerBlur() {
      if (ele.closest("div")) {
        ele.closest("div").style.outline = "";
      }
    }

    // Check if the element is exist
    if (ele) {
      ele.addEventListener("focus", handlerFocus);
      ele.addEventListener("blur", handlerBlur);
    }
    return () => {
      ele.removeEventListener("focus", handlerFocus);
      ele.removeEventListener("blur", handlerBlur);
    };
  }, [inputRef]);

  return (
    <Container $parent={options.parent}>
      {cloneElement(children, {
        type: isShowPass ? "text" : "password",
        ref: inputRef,
        disabled,
      })}
      <ControlShow
        role="button"
        onClick={handleShow}
        $dis={disabled}
        $child={options.child}
      >
        {isShowPass && <FaRegEye />}
        {!isShowPass && <FaRegEyeSlash />}
      </ControlShow>
    </Container>
  );
}

export default Password;
