import{a as o,j as e,b as a}from"./index-Ct-zUf6z.js";const d=o.span`
  width: max-content;
  position: absolute;
  left: 5px;
  bottom: -10px;
  font-style: italic;
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function i({children:r}){return e.jsx(d,{children:r})}const t=o.form`
  ${r=>r.$type==="regular"&&a`
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  padding: 2.4rem 4rem;
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 500px) {
    & {
      padding: 1.2rem 2rem;
    }
  }
`;t.defaultProps={$type:"regular"};const m=o.input`
  ${r=>r.$full?a`
          width: 100%;
        `:""}
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;export{i as F,m as I,t as a};
