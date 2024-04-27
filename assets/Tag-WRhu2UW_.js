import{k as n,u,_ as o,a}from"./index-CeYRl1xh.js";import{u as c}from"./apiBookings-V5lz4pqU.js";function p(){const e=n(),{mutate:r,isPending:s}=u({mutationFn:t=>c(t,{status:"checked-out"}),onSuccess:t=>{o.success(`Booking #${t.id} successfully checked out`),e.invalidateQueries({active:!0})},onError:()=>o.error("There was an error while checking out")});return{checkOut:r,isCheckingOut:s}}const h=a.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.$type}-700);
  background-color: var(--color-${e=>e.$type}-100);
`;export{h as T,p as u};
