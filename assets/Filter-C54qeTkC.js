import{r as c,a as h,b,j as s,M as l,m as v}from"./index-CTXLcj4T.js";function w(e,r,t){if(r===void 0||t===void 0)throw new Error("missing functions");const i=c.useCallback(r,[r]),a=c.useCallback(t,[t]);c.useLayoutEffect(()=>{function o(){window.matchMedia(`(max-width: ${e}px)`).matches?i():a()}return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e,i,a])}const F=h.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,p=h.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.$active&&b`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
  @media (max-width: 600px) {
    & {
      width: 100%;
      margin: 0.1rem 0rem;
    }
  }
`,f=c.createContext();function j({filterFor:e,collapseAt:r=600,defaultFilter:t,clearSearchOnClick:i=[],children:a}){const[o,n]=c.useState(!1);return w(r,()=>{n(!0)},()=>{n(!1)}),s.jsx(f.Provider,{value:{filterFor:e,collapseAt:r,toggle:o,defaultFilter:t,clearSearchOnClick:i},children:o?s.jsxs(l,{id:"filter",children:[s.jsx(l.Toggle,{}),s.jsx(l.List,{children:a})]}):s.jsx(F,{children:a})})}function k({filter:e,children:r}){const{filterFor:t,toggle:i,defaultFilter:a,clearSearchOnClick:o}=c.useContext(f),[n,u]=v(),d=n.get(t);function m(g){o.length&&o.forEach(x=>{n.delete(x)}),n.set(t,g),d!=g&&u(n)}return i?s.jsx(l.Button,{onClick:()=>m(e),children:r}):s.jsx(p,{onClick:()=>m(e),$active:d===e||a===e&&d===null,children:r})}j.FilterButton=k;export{j as F,w as u};
