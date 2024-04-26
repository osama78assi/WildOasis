import { cloneElement, useEffect, useRef } from "react";

import styled from "styled-components";

const Div = styled.div`
  overflow: hidden;
  transition: ${(props) => props.$time}ms height;
`;

function Collapse({ collapsed = true, collapseAt=0, timeOut, children }) {
  if (children.length > 1)
    throw new Error("Collapse component must has one children");

  const parentRef = useRef(null);
  const childRef = useRef(null);
  // Avoid initial render && make cooldown without makeing the component re-render
  const options = useRef({ initialRender: true });

  useEffect(() => {
    if (!options.current.initialRender) {
      const parent = parentRef.current;
      const child = childRef.current;
      const childHeight = parseFloat(getComputedStyle(child).height);

      if (collapsed) {
        parent.style.height = `${childHeight}px`;
      } else if (!collapsed) {
        parent.style.height = `${collapseAt}px`;
      }
    }

    // collapsed at initial render
    if (options.current.initialRender && collapsed) {
      parentRef.current.style.height = `${collapseAt}px`;
    } else if (options.current.initialRender && !collapsed) {
      // opened at initial render
      parentRef.current.style.height = getComputedStyle(
        childRef.current
      ).height;
    }
    options.current.initialRender = false;
  }, [collapsed]); // just when the collapse change

  return (
    <Div ref={parentRef} $time={timeOut}>
      {cloneElement(children, { ref: childRef })}
    </Div>
  );
}

export default Collapse;
