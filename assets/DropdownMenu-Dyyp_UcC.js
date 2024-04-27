import{r as i,a as x,b as p,j as a,d as S,l as w}from"./index-Ct-zUf6z.js";import{I as C}from"./Input-COnufNif.js";const b=i.createContext({activeOption:null,activeValue:null,setActive:null,label:null,isOpen:null,setIsOpen:null,setValue:null,searchRegex:null,setSearchRegex:null}),y=x.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0rem 0rem 0.5rem 0rem;
`,j=x.div`
  display: flex;
  align-items: center;
  overflow: visible;
  position: relative;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  min-height: 5rem;
  padding: 1rem;
  border-radius: ${e=>!e.$open&&"var(--border-radius-sm)"};
  ${e=>e.$pos==="bottom"?p`
          border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
        `:e.$pos==="top"?p`
          border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
        `:""}
`,O=x.span`
  display: block;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: var(--color-grey-400);
`,f=x.li`
  padding: 0.5rem;
  background-color: ${e=>e.$act?"var(--color-grey-300)":"var(--color-grey-0)"};
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-300);
  }
`,k=x.ul`
  ${e=>e.$pos===""&&p`
      display: none;
    `}
  position: absolute;
  width: 100%;
  ${e=>e.$pos==="bottom"&&p`
      top: 100%;
      border-radius: 0px 0px var(--border-radius-sm) var(--border-radius-sm);
      & > :last-child {
        border-radius: 0px 0px var(--border-radius-sm) var(--border-radius-sm);
      }
    `}
  ${e=>e.$pos==="top"&&p`
      bottom: 100%;
      border-radius: var(--border-radius-sm) var(--border-radius-sm) 0px 0px;
      & > :first-child {
        border-radius: var(--border-radius-sm) var(--border-radius-sm) 0px 0px;
      }
    `}
  left: 0;
  z-index: 1;
  max-height: 10rem;
  overflow: auto;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-grey-300);
  & > li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;function g({activeOption:e,activeValue:r,label:t,setValue:s,children:u}){const[l,n]=i.useState(!1),[d,o]=i.useState(e||t),[c,m]=i.useState("");return i.useEffect(()=>{o(e||t),s==null||s(r||"")},[r,e]),a.jsx(b.Provider,{value:{activeOption:d||t,activeValue:r,label:t,isOpen:l,setIsOpen:n,setActive:o,setValue:s,searchRegex:c,setSearchRegex:m},children:u})}function R({children:e}){const{setIsOpen:r,isOpen:t,label:s,activeOption:u}=i.useContext(b),[l,n]=i.useState(""),d=S(()=>{n(""),r(!1)},!0);function o(c,m=!1){let v;if(m?v=c.target.nextSibling:v=c.target.closest("div"),c.stopPropagation(),v){const h=v.getBoundingClientRect(),{bottom:$}=h;window.innerHeight-$>100?t?(n(""),r(!1)):(n("bottom"),r(!0)):t?(n(""),r(!1)):(n("top"),r(!0))}}return a.jsxs(a.Fragment,{children:[s&&a.jsx(y,{onClick:c=>o(c,!0),role:"label",children:s}),a.jsxs(j,{$open:t,ref:d,$pos:l,role:"select",onClick:o,children:[a.jsx(O,{children:u}),t&&a.jsx(k,{$pos:l,children:e}),a.jsx(w,{})]})]})}function I({value:e,children:r}){const{activeOption:t,setValue:s,setActive:u,searchRegex:l}=i.useContext(b),n=r==null?void 0:r.replaceAll(" ","");function d(o){u(r),s==null||s(e,o)}return l===""?a.jsx(f,{$act:t===r,role:"option",onClick:o=>d(o),children:r}):l.test(n)?a.jsx(f,{$act:t===r,role:"option",onClick:o=>d(o),children:r}):null}function A({placeholder:e,id:r,name:t}){const{setSearchRegex:s}=i.useContext(b),[u,l]=i.useState("");function n(d){let o=d.target.value;if(/\W/.test(o))return;const c=new RegExp(`\\b${o}`,"i");l(o),s(c)}return a.jsx(C,{placeholder:e,id:r,name:t,onChange:n,value:u})}g.Select=R;g.SearchInput=A;g.Option=I;export{g as D};
