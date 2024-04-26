import{k as w,u as C,_ as p,j as i,g as q}from"./index-3miXUnVq.js";import{u as V}from"./index.esm-D2Wd5_JB.js";import{c as k,e as I}from"./apiCabins-BYM9ffI5.js";import{F as Q}from"./FileInput-Qn1qBH2o.js";import{a as U,I as l}from"./Input-C1EfaEfr.js";import{F as d}from"./FormRow-DV40d1P4.js";import{T as K}from"./Textarea-BQ1k7nxo.js";import{F as L}from"./FormRowButtons-DmUZOSpM.js";function _(){const t=w(),{isPending:r,mutate:c}=C({mutationFn:({newCabinData:a,copy:u})=>k(a,u),onSuccess:()=>{p.success("Cabin created successfully"),t.invalidateQueries({queryKey:["cabin"]})},onError:a=>p.error(a.message)});return{isCreating:r,create:c}}function z(){const t=w(),{isPending:r,mutate:c}=C({mutationFn:({newCabinData:a,id:u})=>I(a,u),onSuccess:()=>{p.success("Cabin updated successfully"),t.invalidateQueries({queryKey:["cabin"]})},onError:a=>p.error(a.message)});return{isUpdating:r,update:c}}function X({cabinToEdit:t={},onCloseModal:r}){var f,o,b,h,x,y;const{id:c,...a}=t,u=!!c,{register:m,handleSubmit:F,reset:g,getValues:S,formState:P}=V({defaultValues:u?a:{}}),{errors:e}=P,{isCreating:v,create:D}=_(),{isUpdating:R,update:$}=z(),n=R||v;function B(s){const j=typeof s.image=="string"?s.image:s.image[0];u?$({newCabinData:{...s,image:j},id:c},{onSuccess:()=>{g(),r==null||r()}}):D({newCabinData:{...s,image:j},copy:!1},{onSuccess:()=>{g(),r==null||r()}})}return i.jsxs(U,{onSubmit:F(B),$type:r?"modal":"regular",children:[i.jsx(d,{label:"Cabin Name",error:(f=e==null?void 0:e.name)==null?void 0:f.message,withError:!0,children:i.jsx(l,{$full:!0,disabled:n,type:"text",id:"name",...m("name",{required:"This feild is required"})})}),i.jsx(d,{label:"Maximum capacity",error:(o=e==null?void 0:e.maxCapacity)==null?void 0:o.message,withError:!0,children:i.jsx(l,{$full:!0,disabled:n,type:"number",id:"maxCapacity",...m("maxCapacity",{required:"This feild is required",min:{value:1,message:"Capacity Should Be At Least 1"}})})}),i.jsx(d,{label:"Regular price",error:(b=e==null?void 0:e.regularPrice)==null?void 0:b.message,withError:!0,children:i.jsx(l,{$full:!0,disabled:n,type:"number",id:"regularPrice",...m("regularPrice",{required:"This field is required",validate:s=>{if(+s<=0)return"Regular price should be bigger than zero"}})})}),i.jsx(d,{label:"Discount",error:(h=e==null?void 0:e.discount)==null?void 0:h.message,withError:!0,children:i.jsx(l,{$full:!0,disabled:n,type:"number",id:"discount",...m("discount",{required:u?!1:"This feild is required",validate:s=>{if(+s>=+S().regularPrice)return"Discount Should Be Less Than Regular Price";if(+s<0)return"Discount shouldn't be negative"}})})}),i.jsx(d,{label:"Description for website",error:(x=e==null?void 0:e.description)==null?void 0:x.message,withError:!0,children:i.jsx(K,{type:"number",id:"description",defaultValue:"",disabled:n,...m("description",{required:"This feild is required"})})}),i.jsx(d,{label:"Cabin photo",error:(y=e==null?void 0:e.image)==null?void 0:y.message,withError:!(t!=null&&t.id),children:i.jsx(Q,{id:"image",accept:"image/*",...m("image",{...t!=null&&t.id?{}:{required:"This feild is required"}}),disabled:n})}),i.jsxs(L,{children:[i.jsx(q,{disabled:n,$variation:"secondary",type:"reset",onClick:()=>r==null?void 0:r(),children:"Cancel"}),i.jsx(q,{disabled:n,children:u?"Edit cabin":"Creata new cabin"})]})]})}export{X as C,_ as u};
