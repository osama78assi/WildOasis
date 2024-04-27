import{I as B,n as D,a as i,j as e,p as k,J as P,K as E,N as M,f as $}from"./index-DsZ-KJuj.js";import{b as N}from"./apiBookings-D9ZCHV-r.js";import{b as C,f as s}from"./helpers-WI_EYfvg.js";import{F}from"./Flag-BFCstyKd.js";import{f as l}from"./format-D35EthT5.js";import{i as I}from"./isToday-BrluQVH3.js";function A(){const{bookingId:r}=B(),t=["booking",r],{isPending:a,data:o,error:n}=D({queryKey:t,queryFn:()=>N(r),retry:!1});return{booking:o,bookingId:r,isLoading:a,error:n,queryKey:t}}const U=i.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,V=i.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0rem 0.5rem;
  margin-right: 2px;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`,H=i.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,S=i.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;function d({icon:r,label:t,children:a}){return e.jsxs(H,{children:[e.jsxs(S,{children:[r,e.jsx("span",{children:t})]}),a]})}const z=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  @media (max-width: 835px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`,O=i.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`,T=i.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }

  @media (max-width: 835px) {
    & {
      padding: 1.5rem 2rem;
      flex-direction: column;
      > :first-child {
        margin-bottom: 1rem;
      }
    }
  }
`,G=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${r=>r.$isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${r=>r.$isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media(max-width: 835px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`,q=i.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,K=i.section`
  padding: 3.2rem 4rem 1.2rem;
  @media (max-width: 835px) {
    padding: 2.2rem 2rem 1.2rem;
  }
`,L=i.p`
  display: inline-block;
`;function X({booking:r}){if(!(r!=null&&r.created_at))return e.jsx(k,{});const{created_at:t,startDate:a,endDate:o,numNights:n,numGuests:c,cabinPrice:f,extrasPrice:h,totalPrice:u,hasBreakfast:m,observations:p,isPaid:g,guests:{fullName:y,email:b,country:j,countryFlag:x,nationalID:v},cabins:{name:w}}=r;return e.jsxs(q,{children:[e.jsxs(T,{children:[e.jsxs("div",{children:[e.jsx(P,{}),e.jsxs("p",{children:[n," nights in Cabin ",e.jsx("span",{children:w})]})]}),e.jsxs("p",{children:[l(new Date(a),"EEE, MMM dd yyyy")," (",I(new Date(a))?"Today":C(a),") — ",l(new Date(o),"EEE, MMM dd yyyy")]})]}),e.jsxs(K,{children:[e.jsxs(z,{children:[e.jsxs("div",{children:[x&&e.jsx(F,{src:x,alt:`Flag of ${j}`,$additionStyle:"display: inline-block; margin-right: 0.5rem"}),e.jsxs(L,{children:[y," ",c>1?`+ ${c-1} guests`:""]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Email"}),e.jsx("span",{children:b})]}),e.jsxs("div",{children:[e.jsx("p",{children:"National ID"}),e.jsxs("span",{children:["National ID ",v]})]})]}),p&&e.jsx(d,{icon:e.jsx(E,{}),label:"Observations",children:p}),e.jsx(d,{icon:e.jsx(M,{}),label:"Breakfast included?",children:m?"Yes":"No"}),e.jsxs(G,{$isPaid:g,children:[e.jsxs(d,{icon:e.jsx($,{}),label:"Total price",children:[s(u),m&&` (${s(f)} cabin + ${s(h)} breakfast)`]}),e.jsx("p",{children:g?"Paid":"Will pay at property"})]})]}),e.jsx(O,{children:e.jsxs("p",{children:["Booked ",l(new Date(t),"EEE, MMM dd yyyy, p")]})})]})}export{V as B,X as a,U as b,A as u};