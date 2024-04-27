import{r as l,a as c,j as t,d as m,D as h,E as v,i as g,g as p}from"./index-Ct-zUf6z.js";function y(e,n,r=1e3){const o=l.useRef(null);l.useEffect(()=>{if(o.current&&e!=""){o.current.style.opacity=0;let a=0,s=setInterval(()=>{a+=.1,o.current.style.opacity=a,a>=1&&clearInterval(s)},r/100)}},[e,o,r]);function i(){if(o.current){let a=1,s=setInterval(()=>{a-=.1,o.current.style.opacity=a,a<=0&&(clearInterval(s),n==null||n())},r/50)}}return{fadeRef:o,fadeOut:i}}const b=c.div`
  ${e=>e.$form?`
          width: 80%;
          height: 80%;
          @media (max-width: 600px) {
            padding: 0px;
          }
        `:""}
  ${e=>e.$popup?`@media(max-width: 800px) {
    width: 60%;
  }
  @media(max-width: 600px) {
    width: 80%;
  }`:""}
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,w=c.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,j=c.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,u=l.createContext();function f({children:e}){const[n,r]=l.useState(""),o=()=>r(""),i=r;return t.jsx(u.Provider,{value:{openName:n,open:i,close:o},children:e})}function C({children:e,opens:n}){const{open:r}=l.useContext(u);return l.cloneElement(e,{onClick:()=>r(n)})}function k({children:e,name:n,form:r=!1,popup:o=!1}){const{openName:i,close:a}=l.useContext(u),{fadeRef:s,fadeOut:d}=y(i,a,1e3),x=m(d);return n===i?h.createPortal(t.jsx(w,{ref:s,children:t.jsxs(b,{ref:x,$form:r,$popup:o,children:[t.jsx(j,{onClick:d,children:t.jsx(v,{})}),t.jsx("div",{children:l.cloneElement(e,{onCloseModal:d})})]})}),document.body):null}f.Open=C;f.Window=k;const $=c.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;function O({resourceName:e,onConfirm:n,disabled:r,moreDetails:o,onCloseModal:i}){return t.jsxs($,{children:[t.jsxs(g,{as:"h2",children:["Delete ",e]}),t.jsxs("p",{children:["Are you sure you want to delete this ",e," permanently? This action cannot be undoed."," ",o&&t.jsxs("span",{style:{color:"var(--color-warning)"},children:['"',o,'"']})]}),t.jsxs("div",{children:[t.jsx(p,{$variation:"secondary",disabled:r,onClick:i,children:"Cancel"}),t.jsx(p,{$variation:"danger",disabled:r,onClick:n,children:"Delete"})]})]})}export{O as C,f as M};
