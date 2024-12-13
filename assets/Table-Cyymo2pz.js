import{a as e,b as s,r as a,j as r}from"./index-YsPsgoZE.js";const x=e.div`
  position: relative;
  z-index: 1;
  border: 1px solid var(--color-grey-200);
  border-width: 0px 1px;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);

  @media (max-width: ${o=>o.$fixWidthAt||700}px) {
    & {
      width: 725px;
      margin: auto;
    }
  }
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,c=e.div`
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
`,p=e(c)`
  position: sticky;
  top: 0px;
  padding: 1.6rem 2.4rem;
  border-top: 1px solid var(--color-grey-200);
  z-index: 11;
  box-shadow: 0px 0px 5px var(--color-grey-200);

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,u=e(c)`
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  ${o=>o.$additionStyles?s`
          ${o.$additionStyles}
        `:""}
`,y=e.section`
  margin: 0.4rem 0;
  width: 100%;
`,g=e.footer`
  position: sticky;
  bottom: 0px;
  z-index: 11;
  box-shadow: 1px 0px 5px var(--color-grey-200);

  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,h=e.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,l=a.createContext();function d({columns:o,smColumns:t,additionStyles:n,fixWidthAt:i,children:m}){return r.jsx(l.Provider,{value:{columns:o,smColumns:t},children:r.jsx(x,{role:"tabel",$additionStyles:n,$fixWidthAt:i,children:m})})}function $({additionStyles:o,children:t}){const{columns:n,smColumns:i}=a.useContext(l);return r.jsx(p,{$columns:n,$smColumns:i,role:"row",$additionStyles:o,as:"header",children:t})}function b({additionStyles:o,children:t}){const{columns:n,smColumns:i}=a.useContext(l);return r.jsx(u,{role:"row",$columns:n,$smColumns:i,$additionStyles:o,children:t})}function w({data:o,render:t}){return o.length?r.jsx(y,{children:o.map(t)}):r.jsx(h,{children:"No Data To Show In The Moment"})}d.Header=$;d.Row=b;d.Body=w;d.Footer=g;export{d as T};
