import{j as t,a,b as v,r as n,d as w,l as $,m as b}from"./index-CTXLcj4T.js";import{g as S}from"./helpers-BuJpLv72.js";function R({resource:e}){return t.jsxs("p",{children:["No ",e," could be found."]})}const B=a.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  justify-content: space-between;
  ${e=>e.$additionalStyle&&v`
      ${e.$additionalStyle}
    `}
`,j=a.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 11rem;
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  cursor: pointer;
  z-index: 9;

  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  & > :last-child {
    font-size: 2rem;
  }
  ${e=>v`
      @media (max-width: ${e.$getMinAt}px) {
        width: 11rem;
      }
    `}
`,C=a.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: calc(100% - 1px);
  z-index: 15;
  min-width: 11rem;
  width: 100%;
  font-size: 1.4rem;
  border: 1px solid
    ${e=>e.$type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  & > :not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,k=a.div`
  ${e=>e.$type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  ${e=>e.$active?"background-color: var(--color-grey-200);":"background-color: var(--color-grey-0);"}
  &:hover {
    background-color: var(--color-grey-200);
  }
  padding: 0.3rem 1rem;
  ${e=>v`
      @media (max-width: ${e.$getMinAt}px) {
        width: 11rem;
      }
    `}
`,O=a.div`
  width: 80%;
  height: 2rem;
  & > span {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
`,g=n.createContext();let h;function A({options:e,activeLable:o,sortFor:r,type:c,getMinAt:s=500,children:p}){n.useEffect(()=>{h=S()},[]);const[l,i]=n.useState(o),[d,u]=n.useState(!1),x=w(f);function f(m){m.target.closest(`#${h}`)||y()}function y(){u(m=>!m)}return t.jsx(g.Provider,{value:{options:e,activeOption:l,setActiveOption:i,sortFor:r,type:c,getMinAt:s},children:t.jsxs(j,{role:"select",onClick:()=>y(),id:h,$getMinAt:s,children:[d&&t.jsx(E,{eleRef:x,children:p}),t.jsx(O,{children:t.jsx("span",{children:l})}),t.jsx($,{})]})})}function E({eleRef:e,children:o}){const{type:r}=n.useContext(g);return t.jsx(C,{ref:e,$type:r,children:o})}function z({value:e,children:o}){const{activeOption:r,setActiveOption:c,sortFor:s,type:p,getMinAt:l}=n.useContext(g),[i,d]=b();function u(){if(r===o){c(""),i.delete(s),d(i);return}i.set(s,e),d(i),c(o)}return t.jsx(k,{role:"option",onClick:()=>u(),$active:o===r,$type:p,$getMinAt:l,children:o})}A.SelectOption=z;export{B as C,R as E,A as S};
