import{G as c,a as t,j as e}from"./index-Ct-zUf6z.js";function s(r){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"},child:[]}]})(r)}const a=t.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`,n=t.p`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 3px;
`,d=t.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid var(--color-brand-600);
  border-radius: 0.3rem;
  outline-offset: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${r=>r.$active&&"background-color: var(--color-brand-600);"}
  ${r=>r.$dis&&"background-color: var(--color-grey-300); border-color: var(--color-grey-300); cursor: not-allowed;"}
  & > svg {
    color: var(--color-grey-0);
    font-size: 2rem;
  }
`;function x({checked:r,onChange:o,disabled:i=!1,children:l}){return e.jsxs(a,{onClick:()=>{i||o==null||o()},children:[e.jsx(d,{role:"input",$active:r,$dis:i,children:r&&e.jsx(s,{})}),e.jsx(n,{role:"label",children:l})]})}export{x as C};
