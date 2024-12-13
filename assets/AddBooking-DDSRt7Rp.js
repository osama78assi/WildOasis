import{t as Te,c as Re,u as oe,_ as U,a as y,G as ce,b as I,r as o,j as e,d as Le,B as Y,H as le,e as de,C as Oe,S as B,f as ue,F as Pe,L as V,g as re,h as ze,i as He}from"./index-DKoFbsHf.js";import{E as he,u as Ye,R as Ve}from"./ErrorMsg-BUUnFnn-.js";import{u as Ae}from"./useSettings-DXYhpAjj.js";import{a as qe}from"./apiBookings-D_UlYpWX.js";import{f as fe,g as L,d as G,i as Ze,a as se}from"./helpers-C3_8XVGw.js";import{C as ae}from"./Checkbox-ByZSxhDq.js";import{F as A,I as me,a as _e}from"./Input-cBXl6r62.js";import{F as O}from"./FormRow-A86-6CGz.js";import{F as Ke}from"./FormRowButtons-v7AD9mde.js";import{T as Ue}from"./Textarea-BjSHcNsg.js";import{u as pe}from"./useCabins-BjyWSU6p.js";import{I as Qe}from"./Img-nnawGXjJ.js";import{D}from"./DropdownMenu-DkpEVyaa.js";import{D as We}from"./constants-BUW7qVOF.js";import{s as Je}from"./apiGuests-fJbewxlk.js";import{R as ne}from"./Row-8CwvQuMP.js";import"./apiCabins-B5t2tD6D.js";function Xe(t){const s=Te(t),n=s.getFullYear(),l=s.getMonth(),i=Re(t,0);return i.setFullYear(n,l+1,0),i.setHours(0,0,0,0),i.getDate()}function et(){const{mutate:t,isPending:s}=oe({mutationFn:qe,onError:n=>{U.error(n.message)}});return{addBooking:t,isLoading:s}}const z=y.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  background-color: ${t=>t.$bc};
`;function tt(t){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.445 12.688V7.354h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"},child:[]},{tag:"path",attr:{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"},child:[]},{tag:"path",attr:{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"},child:[]}]})(t)}const rt=y.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 1.4rem;
  align-items: center;
  padding: 1.2rem 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-200);

  & > span {
    bottom: 0px !important;
    left: calc(35% + 5px);
  }

  @media (max-width: 600px) {
    & {
      > span {
        left: 5px;
      }
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > * {
        width: 100%;
        flex-basis: 100%;
      }
    }
  }

  ${t=>t.$additionalStyle&&I`
      ${t.$additionalStyle}
    `}
`,st=y.p`
  font-size: 1.4rem;
  font-weight: 500;
`,at=y.span`
  color: ${t=>t.$isOpen?"var(--color-brand-600)":"var(--color-grey-400)"};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.4rem;
  transition: color 0.3s;
`,nt=y.div`
  position: relative;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & > svg {
    transition: color 0.3s;
  }
`,it=y.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  width: fit-content;
  left: 0;
  bottom: 100%;
  background-color: var(--color-grey-200);
  & > div {
    flex-basis: 100%;
    width: 100%;
  }
`,ot=y.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  @media (max-width: 500px) {
    width: fit-content;
    grid-template-columns: repeat(5, 1fr);
  }
`,ct=y.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: ${t=>t.$active?"var(--color-brand-700)":"var(--color-grey-100)"};
  ${t=>t.$active&&I`
      color: #fafafa;
    `}
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-700);
    color: #fafafa;
  }
`,ge=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  & > button {
    width: fit-content !important;
  }
`,ye=y.span`
  font-weight: 500;
  font-size: 1.4rem;
`,q=o.createContext({setter:null,isOpen:null,setIsOpen:null,currentDay:null,currentMonth:null,currentYear:null,currentDate:null,setCurrentDay:null,setCurrentMonth:null,setCurrentYear:null,setCurrentDate:null,id:null}),ie=o.memo(function({id:s,label:n,setter:l,additionalStyle:i,error:c}){const[f,u]=o.useState(!1),[d,h]=o.useState(new Date),p=d.getDate(),g=d.getMonth()+1,S=d.getFullYear();o.useEffect(()=>{l==null||l(d)},[d.getTime()]);function k(m){h(new Date(S,g-1,m))}function E(m){h(x=>{const r=new Date(x);return m?r.setMonth(r.getMonth()+1):r.setMonth(r.getMonth()-1),r})}function b(m){h(x=>{const r=new Date(x);return m?r.setFullYear(r.getFullYear()+1):r.setFullYear(r.getFullYear()-1),r})}return e.jsx(q.Provider,{value:{setter:l,isOpen:f,setIsOpen:u,currentDay:p,setCurrentDay:k,currentYear:S,setCurrentYear:b,currentMonth:g,setCurrentMonth:E,currentDate:d,setCurrentDate:h,id:s},children:e.jsxs(rt,{...i?{$additionalStyle:i}:{},children:[n&&e.jsx(st,{onClick:()=>u(m=>!m),role:"label",id:`label-for-${s}`,children:n}),e.jsxs(nt,{onClick:m=>{m.target.closest(`#menu-for-${s}`)||u(x=>!x)},id:s,role:"input",children:[e.jsx(at,{$isOpen:f,children:d.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(tt,{color:`${f?"var(--color-brand-600)":"var(--color-grey-300)"}`}),f&&e.jsx(lt,{})]}),c&&e.jsx(A,{children:c})]})})}),lt=o.memo(function(){const{currentDay:s,currentDate:n,setCurrentDay:l,setIsOpen:i,id:c}=o.useContext(q),f=Xe(n),u=Le(h=>{h.target.closest(`#${c}`)||h.target.id===`label-for-${c}`||i(!1)});function d(h){h.target.tagName==="SPAN"&&l(+h.target.innerHTML)}return e.jsxs(it,{ref:u,id:`menu-for-${c}`,children:[e.jsx(dt,{}),e.jsx(ut,{}),e.jsx(ot,{onClick:d,children:Array.from({length:f},(h,p)=>e.jsx(ct,{$active:p+1===s,children:p+1},p))})]})}),dt=o.memo(function(){const{currentYear:s,setCurrentYear:n}=o.useContext(q);function l(c){c.preventDefault(),n(!0)}function i(c){c.preventDefault(),n(!1)}return e.jsxs(ge,{children:[e.jsx(Y,{onClick:i,children:e.jsx(le,{})}),e.jsxs(ye,{children:["Year: ",s]}),e.jsx(Y,{onClick:l,children:e.jsx(de,{})})]})}),ut=o.memo(function(){const{currentMonth:s,setCurrentMonth:n,currentDate:l}=o.useContext(q),i=l.toDateString().split(" "),c=i[0],f=i[1];function u(h){h.preventDefault(),n(!0)}function d(h){h.preventDefault(),n(!1)}return e.jsxs(ge,{children:[e.jsx(Y,{onClick:d,children:e.jsx(le,{})}),e.jsxs(ye,{children:[c," ",f," ",s]}),e.jsx(Y,{onClick:u,children:e.jsx(de,{})})]})});function ht(t){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Discount_1"},child:[{tag:"path",attr:{d:"M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z"},child:[]}]}]})(t)}const ft=y.span`
  font-weight: 500;
  color: var(--color-brand-600);
  cursor: pointer;
  text-decoration: underline;
`,mt=y.p`
  ${t=>t.$hide&&t.$isZero!==0&&I`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  transition: all 0.3s;
`;function pt({collapseAt:t,children:s}){const[n,l]=o.useState(!0);return o.useEffect(()=>{l(!1);function i(){l(!1)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{style:{width:"100%"},children:[e.jsx(Oe,{collapsed:n,timeOut:500,collapseAt:t,children:e.jsx(mt,{$hide:!n,$isZero:t,children:s})}),e.jsx(ft,{onClick:()=>{l(i=>!i)},children:n?"Read less":"Read more"})]})})}const gt=y.div`
  display: flex;
  padding: 1.2rem 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-200);
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    gap: 2rem;
  }
`,P=y.div`
  flex-basis: ${t=>t.$width?t.$width:"50%"};
  width: ${t=>t.$width?t.$width:"50%"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${t=>t.$dir?t.$dir:"row"};
  ${t=>t.$gap?I`
          gap: ${t.$gap};
        `:""}
  @media(max-width: 700px) {
    flex-basis: 100%;
    width: 100%;
  }
  ${t=>t.$hasImg&&I`
      padding: 1.5rem 2rem 2rem;
      @media (max-width: 800px) {
        padding: 1rem;
      }
    `}
  ${t=>t.$additionalStyle&&I`
      ${t.$additionalStyle}
    `}
`;function yt({imgUrl:t,alt:s}){const[n,l]=o.useState("");return o.useEffect(()=>{l("");async function i(){const f=await(await fetch(t,{method:"GET"})).blob(),u=URL.createObjectURL(f);l(u)}i()},[t]),n?e.jsx(Qe,{src:n,alt:s,$additionalStyle:"border-radius: var(--border-radius-lg);"}):e.jsx(V,{additionalStyle:{height:"250px",width:"100%"}})}const xt=o.memo(function({id:s,setDetails:n}){const{cabins:l,isFetching:i}=pe();let c="1.5rem";if(!i){const{regularPrice:f,maxCapacity:u,discount:d,name:h,image:p,description:g}=l.filter(S=>S.id===s)[0];return n.current={regularPrice:f,discount:d},e.jsxs(gt,{children:[e.jsxs(P,{$dir:"column",children:[e.jsxs(B,{$additionalStyle:{fontSize:c},children:["Cabin ",h,"'s image"]}),e.jsx(P,{$width:"100%",$hasImg:!0,children:e.jsx(yt,{imgUrl:p,alt:`cabin ${h}'s image`})})]}),e.jsxs(P,{$dir:"column",$gap:"1rem",children:[e.jsxs(z,{$bc:"var(--color-green-100)",children:[e.jsx(ue,{style:{color:"var(--color-green-700)",fontSize:"2rem"}}),e.jsxs(B,{$additionalStyle:{fontSize:c,color:"var(--color-green-700)"},children:["Price: ",fe(f)]})]}),e.jsxs(z,{$bc:"var(--color-blue-100)",children:[e.jsx(Pe,{style:{color:"var(--color-blue-700)",fontSize:"2rem"}}),e.jsxs(B,{$additionalStyle:{fontSize:c,color:"var(--color-blue-700)"},children:["Fit up to: ",u," Guests"]})]}),e.jsxs(z,{$bc:"var(--color-indigo-100)",children:[e.jsx(ht,{style:{color:"var(--color-indigo-700)",fontSize:"2rem"}}),e.jsxs(B,{$additionalStyle:{textDecoration:`${d==0?"line-through":""}`,fontSize:c,color:"var(--color-indigo-700)"},children:["Discount: ",d,"$"]})]})]}),e.jsx(P,{$width:"100%",$dir:"column",children:e.jsx(pt,{collapseAt:21,children:g})})]})}return null}),F=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;
  gap: ${t=>t.$input?"0.5rem":"1.5rem"};
  ${t=>!t.$input&&I`
      padding-bottom: 2.4rem;
      border-bottom: 1px solid var(--color-grey-200);
    `}

  & > span:last-of-type {
    bottom: 0px !important;
  }

  ${t=>t.$additionalStyle&&I`
      ${t.$additionalStyle}
    `}
`,bt=y.p`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
`,vt=o.memo(function({setter:s,selectRef:n,activeValue:l,activeOption:i,error:c}){const{cabins:f,isFetching:u,error:d}=pe();function h(p,g){if(g){const S=g.target.innerHTML;s(p,S)}}return u?e.jsxs(F,{children:[e.jsx(bt,{children:"Select the cabin"}),e.jsx(V,{additionalStyle:{minHeight:"5rem"}})]}):d?e.jsx(he,{faildFor:"cabins",queryKey:["cabin"],additionalStyle:"width: 100%;"}):e.jsxs(F,{$input:!0,ref:n,$additionalStyle:{paddingBottom:"2.4rem",borderBottom:"1px solid var(--color-grey-200)"},children:[e.jsx(D,{label:"Select the cabin",...i?{activeOption:i,activeValue:l}:{},setValue:h,children:e.jsx(D.Select,{children:f.map(p=>e.jsx(D.Option,{value:p.id,children:p.name},p.id))})}),c&&e.jsx(A,{children:c})]})});function jt(){const{mutate:t,data:s,isPending:n}=oe({mutationFn:({column:l,value:i})=>Je({column:l,value:i}),onError:()=>U.error("Something went worng try to search again")});return{serachGuests:t,guests:s,isLoading:n}}const Dt=y.label`
  font-weight: 500;
`,$t=y.p`
  margin: 0;
  font-size: 1.4rem;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  color: var(--color-warning);
  border: 1px solid var(--color-warning);
  border-radius: var(--border-radius-sm);
`,wt=o.memo(function({setter:s,activeValue:n,activeOption:l,error:i,selectRef:c}){const{serachGuests:f,guests:u=[],isLoading:d}=jt(),[h,p]=o.useState(""),[g,S]=o.useState("fullName"),k=o.useRef(!1),E=o.useRef("");function b(r=!1,$){if(k.current)r&&(E.current=$);else{k.current=!0;let w=setTimeout(()=>{f({column:g,value:$}),k.current=!1,clearTimeout(w)},We)}}function m(r){let $,w;if(g==="nationalID"){$=/\d+/;const M=r.target.value.match($);w=M?M[0]:"",p(w)}else if(g==="fullName"){$=/(\w+ \w+|\w+ |\w+)/;const M=r.target.value.match($);w=M?M[0]:"",p(w)}b(!0,w),s("","")}o.useEffect(()=>{E.current?(b(!1,E.current),E.current=""):!E.current&&!h&&b(!1,"")},[d]);function x(r,$){if($){const w=$.target.innerHTML;s(r,w)}}return e.jsxs(F,{children:[e.jsx("div",{children:e.jsx(D,{label:"Set search type",activeOption:g,activeValue:g,setValue:r=>{S(r),p(""),b(!1,"")},children:e.jsxs(D.Select,{children:[e.jsx(D.Option,{value:"nationalID",children:"national ID"}),e.jsx(D.Option,{value:"fullName",children:"full name"})]})})}),e.jsxs(F,{$input:!0,children:[e.jsxs(Dt,{htmlFor:"searchGuestInput",children:["Search By ",g]}),e.jsx(me,{value:h,id:"searchGuestInput",name:"searchGuestInput",placeholder:`Search by ${g}`,onChange:r=>m(r)})]}),e.jsx("div",{ref:c,children:d?e.jsx(V,{additionalStyle:{minHeight:"5rem"}}):u.length?e.jsx(D,{setValue:x,label:"Select the guest",...n?{activeValue:n,activeOption:l}:{},children:e.jsx(D.Select,{children:u.map(r=>e.jsx(D.Option,{value:r.id,children:`fullName: ${r.fullName}, NationalID: ${r.nationalID}`},r.id))})}):e.jsx($t,{children:"No data to show"})}),i&&e.jsx(A,{children:i})]})});function St({setter:t,label:s,error:n}){return e.jsxs(F,{$additionalStyle:"gap: 0.5rem;border-bottom: none;",children:[e.jsx(D,{setValue:t,label:s,activeOption:"unconfirmed",activeValue:"unconfirmed",children:e.jsxs(D.Select,{children:[e.jsx(D.Option,{value:"unconfirmed",children:"unconfirmed"}),e.jsx(D.Option,{value:"checked-in",children:"checked-in"}),e.jsx(D.Option,{value:"checked-out",children:"checked-out"})]})}),n&&e.jsx(A,{children:n})]})}const H=`
  gap: 1.4rem;
  @media(max-width: 600px) {
    & {
      grid-template-rows: none;
      gap: 0.5rem;
    }
  }
`,Et=`${H} grid-template-columns: 1fr;`,xe={guestId:"",guestDetails:"",cabinName:"",cabinId:"",numGuests:1,startDate:new Date,endDate:new Date,withBreakfast:!1,isPaid:!1,observations:"",status:"",isThereErr:!1,errors:{errGuestId:"",errCabinId:"",errNumGuests:"",errStartDate:"",errEndDate:""}};function Ct(t,s){switch(s.type){case"isSubmiting":return{...t,isSubmiting:s.payload};case"guest":return{...t,guestId:s.payload.guestId,guestDetails:s.payload.guestDetails};case"cabin":return{...t,cabinName:s.payload.cabinName,cabinId:s.payload.cabinId};case"numGuests":return{...t,numGuests:s.payload};case"startDate":return{...t,startDate:s.payload};case"endDate":return{...t,endDate:s.payload};case"withBreakfast":return{...t,withBreakfast:s.payload};case"isPaid":return{...t,isPaid:s.payload};case"observations":return{...t,observations:s.payload};case"status":return{...t,status:s.payload};case"reset":return{...xe};case"setErrors":return{...t,errors:{...t.errors,...s.payload}};default:return t}}function kt(){const t=o.useRef(null),s=o.useRef(null),[{guestId:n,guestDetails:l,cabinName:i,cabinId:c,numGuests:f,startDate:u,endDate:d,withBreakfast:h,isPaid:p,observations:g,status:S,errors:{errGuestId:k,errCabinId:E,errNumGuests:b,errStartDate:m,errEndDate:x}},r]=o.useReducer(Ct,xe),$=o.useRef(""),w=l.split(",")[0].split(":")[1],[M,be]=o.useState(L()),[ve,je]=o.useState(L()),{settings:{breakfastPrice:Q,maxGuestsPerBooking:W,minBookingLength:N,maxBookingLength:T}={},isPending:Z,error:_}=Ae(),{addBooking:De,isLoading:J}=et(),$e=o.useCallback(function(v,j){v===n&&j===l||r({type:"guest",payload:{guestId:v,guestDetails:j}})},[]),we=o.useCallback(function(v,j){v===c&&j===i||r({type:"cabin",payload:{cabinId:v,cabinName:j}})},[]),Se=o.useCallback(a=>{(a==null?void 0:a.getTime())!==(u==null?void 0:u.getTime())&&r({type:"startDate",payload:a})},[]),Ee=o.useCallback(a=>{(a==null?void 0:a.getTime())!==(d==null?void 0:d.getTime())&&r({type:"endDate",payload:a})},[]);function Ce(){let a=!1;return n?r({type:"setErrors",payload:{errGuestId:""}}):(k||r({type:"setErrors",payload:{errGuestId:"This field is reqiured"}}),a=!0),a}function ke(){let a=!1;return c?r({type:"setErrors",payload:{errCabinId:""}}):(E||r({type:"setErrors",payload:{errCabinId:"This field is reqiured"}}),a=!0),a}function Ie(){let a=!1;const v="This field is reqiured",j="This number should be bigger than zero",C=`Number of guests shouldn't excced ${W} guests`;return f?f<0?((!b||b!==j)&&r({type:"setErrors",payload:{errNumGuests:j}}),a=!0):f>W?(!b||b!==C)&&r({type:"setErrors",payload:{errNumGuests:C}}):b&&r({type:"setErrors",payload:{errNumGuests:""}}):((!b||b!==v)&&r({type:"setErrors",payload:{errNumGuests:v}}),a=!0),a}function Me(){let a=!1;const v="This date shouldn't be in the past",j="The start date should be before end date",C=`Min booking days should be more or equal to ${N} days`,R=`Max booking days should be less or equal to ${T} days`;return Ze(u)?((!m||m!==v)&&r({type:"setErrors",payload:{errStartDate:v}}),a=!0):se(d,u)?G(d,u)<N?((!m||m!==C)&&r({type:"setErrors",payload:{errStartDate:C}}),a=!0):G(d,u)>T?((!m||m!==R)&&r({type:"setErrors",payload:{errStartDate:R}}),a=!0):m&&r({type:"setErrors",payload:{errStartDate:""}}):((!m||m!==j)&&r({type:"setErrors",payload:{errStartDate:j}}),a=!0),a}function Ge(){let a=!1;const v="The end date should be after start date",j=`Min booking days should be more or equal to ${N} days`,C=`Max booking days should be less or equal to ${T} days`;return se(d,u)?G(d,u)<N?((!x||x!==j)&&r({type:"setErrors",payload:{errEndDate:j}}),a=!0):G(d,u)>T?((!x||x!==C)&&r({type:"setErrors",payload:{errEndDate:C}}),a=!0):x&&r({type:"setErrors",payload:{errEndDate:""}}):((!x||x!==v)&&r({type:"setErrors",payload:{errEndDate:v}}),a=!0),a}function X(){r({type:"reset"}),be(L()),je(L())}function Be(a){if(a.preventDefault(),[ke(),Ce(),Ie(),Me(),Ge()].some(Ne=>Ne))return;const{regularPrice:C,discount:R}=$.current,K=G(d,u),ee=C-R,te=Q*K,Fe={startDate:u,endDate:d,numNights:K,numGuests:f,cabinPrice:ee,extrasPrice:te,totalPrice:ee*K+te,status:S,hasBreakfast:h,isPaid:p,observations:g,cabinId:c,guestId:n};De(Fe,{onSuccess:()=>{U.success("Booking added successfully"),X()}})}return _?e.jsx(he,{faildFor:"settings"}):e.jsxs(_e,{style:{overflow:"visible"},onSubmit:Be,children:[e.jsx(wt,{error:k,setter:$e,activeOption:l,activeValue:n,selectRef:s}),e.jsx(vt,{error:E,setter:we,activeOption:i,activeValue:c,selectRef:t}),c&&e.jsx(xt,{id:c,setDetails:$}),e.jsx(O,{label:"Enter number of guests",error:b,withError:!0,additionalStyle:H,children:e.jsx(me,{type:"number",id:"numGuests",name:"numGuests",$full:!0,value:f,onChange:a=>{+a.target.value!==f&&r({type:"numGuests",payload:+a.target.value})}})}),e.jsx(ie,{label:"Select start date",id:"startDate",error:m,setter:Se},M),e.jsx(ie,{label:"Select end date",id:"endDate",error:x,setter:Ee},ve),e.jsx(O,{additionalStyle:H,children:Z?e.jsx(V,{additionalStyle:{minHeight:"5rem"}}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{checked:h,onChange:()=>r({type:"withBreakfast",payload:!h}),children:"With breakfast"}),e.jsxs(z,{$bc:"var(--color-green-100)",style:{padding:"1rem 0rem"},children:[e.jsx(ue,{style:{color:"var(--color-green-700)",fontSize:"2rem"}}),e.jsxs(B,{$additionalStyle:{fontSize:"1.4rem",color:"var(--color-green-700)"},children:["Breakfast price: ",fe(Q)]})]})]})}),e.jsx(O,{withError:!1,additionalStyle:Et,children:e.jsxs(ae,{checked:p,onChange:()=>r({type:"isPaid",payload:!p}),children:["Has ",w||"the guest"," paid ?"]})}),e.jsx(O,{withError:!1,additionalStyle:H,label:"Add observations",children:e.jsx(Ue,{id:"observations",name:"observations",value:g,onChange:a=>r({type:"observations",payload:a.target.value})})}),e.jsx(St,{label:"Set the status",setter:a=>{a!==S&&r({type:"status",payload:a})}}),e.jsxs(Ke,{children:[e.jsx(re,{$variation:"secondary",type:"reset",onClick:X,disabled:J||Z||_,children:"Reset"}),e.jsx(re,{$variation:"primary",disabled:J||Z||_,children:"Add Booking"})]})]})}function Zt(){const[t,s]=o.useState("h1");ze(500,()=>s("h2"),()=>s("h1"));const{reFetch:i,isFetching:c}=Ye();return e.jsxs(e.Fragment,{children:[e.jsxs(ne,{style:{overflow:"visible"},children:[e.jsx(He,{as:t,children:"Add Booking"}),e.jsx(Ve,{onClick:i,disabled:c,isFetching:c})]}),e.jsx(ne,{style:{overflow:"visible"},children:e.jsx(kt,{})})]})}export{Zt as default};
