import{a,b as t}from"./index-D_d7XbGv.js";const o=a.div`
  overflow: auto;
  display: flex;
  ${e=>e.$type==="horizontal"&&t`
      justify-content: space-between;
      align-items: center;
    `}
  ${e=>e.$type==="vertical"&&t`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;o.defaultProps={$type:"vertical"};export{o as R};