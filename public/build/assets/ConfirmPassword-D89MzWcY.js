import{T as m,d,e as c,b as a,u as e,w as r,F as u,o as p,Z as f,a as o,n as _,g as w,i as g}from"./app-BMHQTMp5.js";import{A as b,_ as h}from"./AuthenticationCardLogo-B9OmfFxk.js";import{_ as x,a as v}from"./TextInput-BHlrNBB-.js";import{_ as y}from"./InputLabel-xAf7OafN.js";import{_ as V}from"./PrimaryButton-n1mrxxVk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C=o("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$={class:"flex justify-end mt-4"},S={__name:"ConfirmPassword",setup(k){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(p(),c(u,null,[a(e(f),{title:"Secure Area"}),a(b,null,{logo:r(()=>[a(h)]),default:r(()=>[C,o("form",{onSubmit:g(n,["prevent"])},[o("div",null,[a(y,{for:"password",value:"Password"}),a(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",$,[a(V,{class:_(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{S as default};
