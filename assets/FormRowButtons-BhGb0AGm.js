import{a,b as i,j as o}from"./index-DsZ-KJuj.js";const d=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 1.4rem;
    }
  }
  ${t=>t.$additionalStyle&&i`
      ${t.$additionalStyle}
    `}
`;function l({additionalStyle:t,children:r}){return o.jsx(d,{...t?{$additionalStyle:t}:{},children:r})}export{l as F};
