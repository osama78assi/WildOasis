import{a as t,b as s,r as l,j as r}from"./index-3miXUnVq.js";const u=t.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: ${o=>o.$fixWidthAt||700}px) {
    & {
      width: 725px;
      margin: auto;
    }
  }
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,c=t.div`
  display: grid;
  ${o=>s`
      grid-template-columns: ${o.$columns};
    `}

  @media (max-width: 600px) {
    & {
      ${o=>s`
          grid-template-columns: ${o.$smColumns};
        `}
    }
  }
  column-gap: 2.4rem;
  align-items: center;
`,x=t(c)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,y=t(c)`
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,$=t.section`
  margin: 0.4rem 0;
  width: 100%;
`,g=t.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,h=t.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,a=l.createContext();function d({columns:o,smColumns:e,additionStyles:n,fixWidthAt:i,children:m}){return r.jsx(a.Provider,{value:{columns:o,smColumns:e},children:r.jsx(u,{role:"tabel",$additionStyles:n,$fixWidthAt:i,children:m})})}function p({additionStyles:o,children:e}){const{columns:n,smColumns:i}=l.useContext(a);return r.jsx(x,{$columns:n,$smColumns:i,role:"row",$additionStyles:o,as:"header",children:e})}function f({additionStyles:o,children:e}){const{columns:n,smColumns:i}=l.useContext(a);return r.jsx(y,{role:"row",$columns:n,$smColumns:i,$additionStyles:o,children:e})}function w({data:o,render:e}){return o.length?r.jsx($,{children:o.map(e)}):r.jsx(h,{children:"No Data To Show In The Moment"})}d.Header=p;d.Row=f;d.Body=w;d.Footer=g;export{d as T};
