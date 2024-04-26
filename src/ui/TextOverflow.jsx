import { useEffect, useState } from "react";

import styled, { css } from "styled-components";

import Collapse from "./Collapse";

const Span = styled.span`
  font-weight: 500;
  color: var(--color-brand-600);
  cursor: pointer;
  text-decoration: underline;
`;

const P = styled.p`
  ${(props) =>
    props.$hide &&
    props.$isZero !== 0 &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  transition: all 0.3s;
`;

function TextOverflow({ collapseAt, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsCollapsed(false); // for the behavior of collapse component

    function reRender() {
      setIsCollapsed(false);
    }

    window.addEventListener("resize", reRender);

    return () => window.removeEventListener("resize", reRender);
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Collapse collapsed={isCollapsed} timeOut={500} collapseAt={collapseAt}>
          <P $hide={!isCollapsed} $isZero={collapseAt}>
            {children}
          </P>
        </Collapse>
        <Span
          onClick={() => {
            setIsCollapsed((s) => !s);
          }}
        >
          {isCollapsed ? "Read less" : "Read more"}
        </Span>
      </div>
    </>
  );
}

export default TextOverflow;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import Collapse from "./Collapse";

// const Span = styled.span`
//   font-weight: 500;
//   color: var(--color-brand-600);
//   cursor: pointer;
//   text-decoration: underline;
// `;

// const P = styled.p`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

// function TextOverflow({ children }) {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [visibleText, setVisibleText] = useState("");
//   const [hiddenText, setHiddenText] = useState("");

//   useEffect(() => {
//     setIsCollapsed(false); // for th behavior of collapse component
//   }, []);

//   return (
//     <div style={{ width: "100%" }}>
//       {!isCollapsed && <P>{children}</P>}

//       <Collapse collapsed={isCollapsed} timeOut={500}>
//         <p>{children}</p>
//       </Collapse>
//       {
//         <Span
//           onClick={() => {
//             setIsCollapsed((s) => !s);
//           }}
//         >
//           {isCollapsed ? "Read less" : "Read more"}
//         </Span>
//       }
//     </div>
//   );
// }

// export default TextOverflow;
