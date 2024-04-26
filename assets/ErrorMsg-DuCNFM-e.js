import{k as l,r as s,a3 as u,a4 as g,a as i,b as d,j as r,a5 as f,a6 as h}from"./index-3miXUnVq.js";function b(e,t){const o=l(t),n=o.getQueryCache();return s.useSyncExternalStore(s.useCallback(a=>n.subscribe(u.batchCalls(a)),[n]),()=>o.isFetching(e),()=>o.isFetching(e))}function m(e){const t=l();function o(){e?t.invalidateQueries({queryKey:e}):t.invalidateQueries({active:!0})}return{isFetching:b({...e?{queryKey:e}:{active:!0}}),reFetch:o}}const v=g`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`,p=i.button`
  display: flex;
  padding: 0 1rem;
  justify-content: end;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-grey-900);
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    outline-offset: 0px;
  }

  ${e=>e.$isFetching&&d`
      & > svg {
        animation: ${v} ${e.$time||1e3}ms infinite linear;
      }
    `}
`;function x({onClick:e,isFetching:t,time:o,color:n,fontSize:a,disabled:c}){return r.jsx(p,{onClick:()=>{e==null||e()},disabled:c,$isFetching:t,$time:o,children:r.jsx(f,{fontSize:a||"1.5rem",color:n||"var(--color-grey-600)"})})}const y=i.div`
  border-radius: var(--border-radius-lg);
  background-color: var(--color-danger-bc);
  padding: 1rem 2rem;
  ${e=>e.$additionalStyle&&d`
      ${e.$additionalStyle}
    `}
`,j=i.p`
  position: relative;
  border-radius: 0.5rem;
  z-index: 1;
  font-size: 2rem;
`,$=i.div`
  background-color: var(--color-danger-bc);
  color: var(--color-danger-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  gap: 1rem;

  & > svg {
    font-size: 4.5rem;
  }
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding: 1rem 2rem;

  & > :before {
    content: "";
    display: block;
    position: absolute;
    top: 0rem;
    left: 1rem;
    width: 1px;
    height: calc(100% + 1rem);
    background-color: var(--color-danger-color);
  }

  & > :after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -2rem;
    background-color: var(--color-danger-color);
    width: calc(100% + 4rem);
    height: 1px;
  }
`,R=i.button`
  background-color: var(--color-danger-300);
  color: var(--color-danger-100);
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: var(--border-radius-sm);

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover {
    background-color: var(--color-danger-500);
  }
`,k=i.div`
  color: var(--color-danger-color);
  display: flex;
  justify-cotent: space-between;
  align-items: center;
  & > button {
    cursor: initial;
    & > svg {
      color: var(--color-danger-color) !important;
    }
  }
`;function C({queryKey:e,additionalStyle:t,faildFor:o}){const{reFetch:n,isFetching:a}=m(e);return r.jsxs(y,{...t?{$additionalStyle:t}:{},children:[r.jsxs($,{children:[r.jsxs(j,{children:["Something went wrong, Faild to load the ",o||"data"]}),r.jsx(h,{})]}),r.jsxs(F,{children:[r.jsxs(k,{children:[r.jsxs("p",{children:["Try to refetch the ",o||"data"," from the button, if it didn't work try to reload the page"]}),r.jsx(x,{isFetching:a})]}),r.jsx(R,{onClick:c=>{c.preventDefault(),n()},disabled:a,children:"Refetch"})]})]})}export{C as E,x as R,m as u};
