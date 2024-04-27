import{a as d,j as s,G as p,r as i,q as x,k as v,u as b,$ as y,_ as w,g as C,a0 as j,h as L,a1 as E,a2 as S,i as $}from"./index-CTXLcj4T.js";import{F as M,a as z,I as m}from"./Input-2BG84v2a.js";const F=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,P=d.label`
  font-size: 1.6rem;
  font-weight: 500;
`;function f({label:e,error:n,children:r}){return s.jsxs(F,{children:[e&&s.jsx(P,{htmlFor:r.props.id,children:e}),r,n&&s.jsx(M,{children:n})]})}function R(e){return p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"},child:[]}]})(e)}function k(e){return p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"},child:[]}]})(e)}const B=d.div`
  display: flex;
  border-radius: var(--border-radius-sm);
  > :first-child {
    flex-basis: ${e=>e.$parent}%;
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    &:focus,
    &:focus-visible {
      outline: none;
      outline-offset: -1px;
    }
  }
`,I=d.div`
  flex-basis: ${e=>e.$child}%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-left: none;
  border-radius: 0px var(--border-radius-sm) var(--border-radius-sm) 0px;
  color: ${e=>e.$dis?"var(--color-grey-200)":"var(--color-grey-500)"};
  box-shadow: var(--shadow-sm);
  cursor: ${e=>e.$dis?"not-allowed":"pointer"};
`;function N({disabled:e,children:n,options:r={parent:95,child:5}}){const[c,t]=i.useState(!1),a=i.useRef(null);function h(){t(o=>!o)}return i.useEffect(()=>{const o=a.current;function u(){o.closest("div")&&(o.closest("div").style.outline="2px solid var(--color-brand-600)")}function l(){o.closest("div")&&(o.closest("div").style.outline="")}return o&&(o.addEventListener("focus",u),o.addEventListener("blur",l)),()=>{o.removeEventListener("focus",u),o.removeEventListener("blur",l)}},[a]),s.jsxs(B,{$parent:r.parent,children:[i.cloneElement(n,{type:c?"text":"password",ref:a,disabled:e}),s.jsxs(I,{role:"button",onClick:h,$dis:e,$child:r.child,children:[c&&s.jsx(k,{}),!c&&s.jsx(R,{})]})]})}function Q(){const e=x(),n=v(),{mutate:r,isPending:c}=b({mutationFn:({email:t,password:a})=>y({email:t,password:a}),onSuccess:t=>{n.setQueryData(["user"],t.user),e("/dashboard",{replace:!0})},onError:t=>{console.log(t.message),w.error("Provided email or password are incorrect")}});return{login:r,isLoading:c}}function q(){const[e,n]=i.useState(""),[r,c]=i.useState(""),[t,a]=i.useState({}),{login:h,isLoading:o}=Q();function u(l){l.preventDefault(),e||a(g=>({...g,email:"email shoudln't be empty"})),r||a(g=>({...g,password:"password shouldn't be empty"})),e&&r&&h({email:e,password:r})}return s.jsxs(z,{onSubmit:u,children:[s.jsx(f,{label:"Email address",error:t==null?void 0:t.email,children:s.jsx(m,{type:"email",id:"email",autoComplete:"username",value:e,onChange:l=>n(l.target.value),disabled:o})}),s.jsx(f,{label:"Password",error:t==null?void 0:t.password,children:s.jsx(N,{disabled:o,children:s.jsx(m,{type:"password",id:"password",autoComplete:"current-password",value:r,onChange:l=>c(l.target.value)})})}),s.jsx(f,{children:s.jsx(C,{$size:"large",disabled:o,children:o?s.jsx(j,{}):"Login"})})]})}const D=d.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`,G=d.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  margin: auto;
`;function A(){const[e,n]=i.useState("h1");L(500,()=>n("h2"),()=>n("h1"));const t=x(),{isAuthenticated:a}=E();return i.useEffect(()=>{a&&t("/")},[a,t]),s.jsx(D,{children:s.jsxs(G,{children:[s.jsx(S,{h:18}),s.jsx($,{as:e,$align:"center",children:"Log in to your account"}),s.jsx(q,{})]})})}export{A as default};
