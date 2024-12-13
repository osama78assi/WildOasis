import{a,b as s,j as t}from"./index-DKoFbsHf.js";import{F as n}from"./Input-cBXl6r62.js";const l=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 1.4rem;
    }
  }
  ${o=>o.$additionalStyle&&s`
      ${o.$additionalStyle}
    `}
`,m=a.label`
  font-weight: 500;
`,p=a.div`
  position: relative;
  padding-bottom: 10px;
`;function x({label:o,error:e,withError:r=!1,additionalStyle:d,children:i}){return t.jsxs(l,{...d?{$additionalStyle:d}:{},children:[o&&t.jsx(m,{htmlFor:i.props.id,children:o}),r&&t.jsxs(p,{children:[i,e&&t.jsx(n,{children:e})]}),!r&&t.jsx(t.Fragment,{children:i})]})}export{x as F};
