import{a as o,b as h,m as p,j as e,H as m,e as x}from"./index-3miXUnVq.js";const f=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u=o.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
  ${n=>n.$singlePage&&h`
      width: 100%;
      text-align: center;
    `}
`,l=o.button`
  background-color: ${n=>n.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${n=>n.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function b({count:n,pageSize:s}){const[t,c]=p(),r=t.get("page")?+t.get("page"):1,a=Math.ceil(n/s);function d(){if(r===a)return;const i=r+1;t.set("page",i),c(t)}function g(){if(r==1)return;const i=r-1;t.set("page",i),c(t)}return e.jsxs(f,{children:[a>1&&e.jsxs(l,{onClick:g,disabled:r===1,children:[e.jsx(m,{}),e.jsx("span",{children:"Previous"})]}),e.jsxs(u,{$singlePage:a===1,children:["Showing ",e.jsx("span",{children:(r-1)*s+1})," to"," ",e.jsx("span",{children:r===a?n:r*s})," ","of ",e.jsxs("span",{children:[n," "]})," results"]}),a>1&&e.jsxs(l,{onClick:d,disabled:r===a,children:[e.jsx(x,{}),e.jsx("span",{children:"Next"})]})]})}export{b as P};
