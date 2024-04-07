import{e as n,b as a,u as d,w as m,F as c,H as u,o as f,Z as g,a as e,i as p,l,I as r}from"./app-Chp1Ug2_.js";import{S as b}from"./StoreLayout-Dxdtwxtw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={class:"font-sans text-gray-900 antialiased pt-20"},y={class:"pt-4 bg-gray-100"},w={class:"min-h-screen flex flex-col items-center pt-6 sm:pt-0 py-5"},x=e("div",{class:"text-center"},[e("h1",{class:"text-2xl font-bold"},"Libro de Reclamaciones"),e("h2",{class:"text-xl"},"THR CORPORATION"),e("h3",{class:"text-lg"},"20606613041")],-1),v={class:"w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg"},_={class:"mb-4"},k=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nombre completo",-1),F={class:"mb-4"},U=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"DNI",-1),D={class:"mb-4"},R=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Correo electrónico",-1),V={class:"mb-4"},q=e("label",{for:"phone",class:"block text-sm font-medium text-gray-700"},"Celular",-1),C={class:"mb-4"},B=e("label",{for:"incidentDate",class:"block text-sm font-medium text-gray-700"},"Fecha del hecho",-1),E={class:"mb-4"},L=e("label",{for:"complaint",class:"block text-sm font-medium text-gray-700"},"Detalle del reclamo",-1),N={class:"mb-4"},A=e("label",{for:"files",class:"block text-sm font-medium text-gray-700"},"Adjuntar archivos",-1),I=e("div",{class:"flex justify-end"},[e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},"Enviar Reclamo")],-1),O=e("div",{id:"alert-complaint",class:"slide-in-fwd-right max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg fixed right-0 bottom-0 mb-4 mr-4 z-30 hidden",role:"alert"},[e("div",{class:"flex p-4"},[e("div",{class:"flex-shrink-0"},[e("svg",{class:"flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})])]),e("div",{class:"ml-3"},[e("p",{class:"text-sm text-gray-700"}," Reclamo Enviado ")])])],-1),T={data(){return{form:{name:"",dni:"",email:"",phone:"",incidentDate:"",complaint:"",files:[]},errors:{}}},methods:{handleFilesUpload(i){this.form.files=Array.from(i.target.files)},submitForm(){u.post("/complaint",this.form).then(i=>{console.log("Form submitted successfully",i),document.getElementById("alert-complaint").classList.remove("hidden"),setTimeout(()=>{this.$inertia.visit("/")},3e3)}).catch(i=>{console.error("Error submitting form",i),i.response&&i.response.status===422&&(this.errors=i.response.data.errors)})},resetFrom(){}},computed:{}},S=Object.assign(T,{__name:"Reclamaciones",setup(i){return(o,s)=>(f(),n(c,null,[a(d(g),{title:"Formulario de Reclamación"}),a(b,null,{default:m(()=>[e("div",h,[e("div",y,[e("div",w,[x,e("div",v,[e("form",{onSubmit:s[7]||(s[7]=p((...t)=>o.submitForm&&o.submitForm(...t),["prevent"]))},[e("div",_,[k,l(e("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=t=>o.form.name=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.name]])]),e("div",F,[U,l(e("input",{type:"text",id:"name","onUpdate:modelValue":s[1]||(s[1]=t=>o.form.dni=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.dni]])]),e("div",D,[R,l(e("input",{type:"email",id:"email","onUpdate:modelValue":s[2]||(s[2]=t=>o.form.email=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.email]])]),e("div",V,[q,l(e("input",{type:"tel",id:"phone","onUpdate:modelValue":s[3]||(s[3]=t=>o.form.phone=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.phone]])]),e("div",C,[B,l(e("input",{type:"date",id:"incidentDate","onUpdate:modelValue":s[4]||(s[4]=t=>o.form.incidentDate=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.incidentDate]])]),e("div",E,[L,l(e("textarea",{id:"complaint","onUpdate:modelValue":s[5]||(s[5]=t=>o.form.complaint=t),rows:"4",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[r,o.form.complaint]])]),e("div",N,[A,e("input",{type:"file",id:"files",ref:"files",onChange:s[6]||(s[6]=(...t)=>o.handleFilesUpload&&o.handleFilesUpload(...t)),multiple:"",class:"mt-1 block w-full"},null,544)]),I],32)])])])]),O]),_:1})],64))}});export{S as default};
