import{e as d,b as n,u as m,w as c,F as u,I as f,o as p,Z as g,a as o,i as b,l as r,J as l,K as h,v as y,g as a}from"./app-BMHQTMp5.js";import{S as x}from"./StoreLayout-C8SdyVTP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"font-sans text-gray-900 antialiased pt-20"},w={class:"pt-4 bg-gray-100"},_={class:"min-h-screen flex flex-col items-center pt-6 sm:pt-0 py-5"},k=o("div",{class:"text-center"},[o("h1",{class:"text-2xl font-bold"},"Libro de Reclamaciones"),o("h2",{class:"text-xl"},"THR CORPORATION"),o("h3",{class:"text-lg"},"20606613041"),o("p",null,[a(" Tienda Online: las ventas online no aplican a menores de 18 años "),o("br"),a(" Establecimiento comercial: tienda online www.thrcorporation.com ")])],-1),C={class:"w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg"},D={class:"mb-4"},E=o("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nombre completo",-1),O={class:"mb-4"},U=o("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Correo electrónico",-1),q={class:"mb-4"},F=o("label",{for:"phone",class:"block text-sm font-medium text-gray-700"},"Celular",-1),V={class:"flex mb-4 -mx-2"},R={class:"w-1/2 px-2"},T=o("label",{for:"dni",class:"block text-sm font-medium text-gray-700"},"TIPO DE DOC",-1),A=o("option",{value:"DNI"},"DNI",-1),N=o("option",{value:"CE"},"CE",-1),I=o("option",{value:"PASAPORTE"},"PASAPORTE",-1),P=[A,N,I],M={class:"w-1/2 px-2"},B=o("label",{for:"dni",class:"block text-sm font-medium text-gray-700"},"DOCUMENTO",-1),L={class:"mb-4"},S=o("label",{for:"complaint",class:"block text-sm font-medium text-gray-700"},"Detalles del BIEN o PRODUCTO contratado",-1),j={class:"mb-4"},z=o("label",{for:"incidentDate",class:"block text-sm font-medium text-gray-700"},"Fecha del hecho",-1),H={class:"mb-4"},J=o("label",{for:"complaint",class:"block text-sm font-medium text-gray-700"},"Detalle del reclamo",-1),K={class:"mb-4"},Z=o("label",{for:"files",class:"block text-sm font-medium text-gray-700"},"Adjuntar archivos",-1),$={class:"mb-4"},G={for:"termsCheckbox",class:"flex items-center"},Q=o("span",{class:"ml-2 block text-sm font-medium text-gray-700"},"Me encuentro conforme con los términos de mi reclamo o queja*",-1),W=o("div",{class:"mb-4 text-sm"}," La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cuál es improrrogable. ",-1),X=o("div",{class:"flex justify-end"},[o("button",{type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},"Enviar Reclamo")],-1),Y=o("div",{id:"alert-complaint",class:"slide-in-fwd-right max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg fixed right-0 bottom-0 mb-4 mr-4 z-30 hidden",role:"alert"},[o("div",{class:"flex p-4"},[o("div",{class:"flex-shrink-0"},[o("svg",{class:"flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"},[o("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})])]),o("div",{class:"ml-3"},[o("p",{class:"text-sm text-gray-700"}," Reclamo Enviado ")])])],-1),oo={data(){return{form:{name:"",email:"",phone:"",doc_type:"",doc_number:"",incidentDate:"",complaint:"",files:[]},errors:{}}},methods:{handleFilesUpload(i){this.form.files=Array.from(i.target.files)},submitForm(){f.post("/complaint",this.form).then(i=>{console.log("Form submitted successfully",i),document.getElementById("alert-complaint").classList.remove("hidden"),setTimeout(()=>{this.$inertia.visit("/")},3e3)}).catch(i=>{console.error("Error submitting form",i),i.response&&i.response.status===422&&(this.errors=i.response.data.errors)})},resetFrom(){}},computed:{}},io=Object.assign(oo,{__name:"Reclamaciones",setup(i){return(e,s)=>(p(),d(u,null,[n(m(g),{title:"Formulario de Reclamación"}),n(x,null,{default:c(()=>[o("div",v,[o("div",w,[o("div",_,[k,o("div",C,[o("form",{onSubmit:s[10]||(s[10]=b((...t)=>e.submitForm&&e.submitForm(...t),["prevent"]))},[o("div",D,[E,r(o("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=t=>e.form.name=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.name]])]),o("div",O,[U,r(o("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e.form.email=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.email]])]),o("div",q,[F,r(o("input",{type:"tel",id:"phone","onUpdate:modelValue":s[2]||(s[2]=t=>e.form.phone=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.phone]])]),o("div",V,[o("div",R,[T,r(o("select",{id:"dni","onUpdate:modelValue":s[3]||(s[3]=t=>e.form.doc_type=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},P,512),[[h,e.form.doc_type]])]),o("div",M,[B,r(o("input",{type:"text",id:"dni","onUpdate:modelValue":s[4]||(s[4]=t=>e.form.doc_number=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.doc_number]])])]),o("div",L,[S,r(o("textarea",{id:"complaint","onUpdate:modelValue":s[5]||(s[5]=t=>e.form.complaint=t),rows:"4",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.complaint]])]),o("div",j,[z,r(o("input",{type:"date",id:"incidentDate","onUpdate:modelValue":s[6]||(s[6]=t=>e.form.incidentDate=t),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.incidentDate]])]),o("div",H,[J,r(o("textarea",{id:"complaint","onUpdate:modelValue":s[7]||(s[7]=t=>e.form.complaint=t),rows:"4",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[l,e.form.complaint]])]),o("div",K,[Z,o("input",{type:"file",id:"files",ref:"files",onChange:s[8]||(s[8]=(...t)=>e.handleFilesUpload&&e.handleFilesUpload(...t)),multiple:"",class:"mt-1 block w-full"},null,544)]),o("div",$,[o("label",G,[r(o("input",{type:"checkbox",id:"termsCheckbox","onUpdate:modelValue":s[9]||(s[9]=t=>e.form.termsAgreement=t),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",required:""},null,512),[[y,e.form.termsAgreement]]),Q])]),W,X],32)])])])]),Y]),_:1})],64))}});export{io as default};
