import{o as r,e as n,p as h,H as x,a as e,t as i,F as $,h as j,g as b,n as S,I as p,b as c,r as A,c as v,f as O,w as T}from"./app-CZhNldhy.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import y from"./Carrousel-CnrK8N5K.js";import w from"./ProductsSelection-CKQNwaMB.js";import C from"./About-XZBI-Wgy.js";import{L as F}from"./Loader-C_vvN74B.js";import"./CategoriesView-CvnYZjTy.js";import"./ProductsList-Qao2CJuc.js";import"./Search-BCrNBAEF.js";const I={},L={class:"slide-in-fwd-right max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg fixed right-0 bottom-0 mb-4 mr-4 z-30",role:"alert"},N=h('<div class="flex p-4"><div class="flex-shrink-0"><svg class="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></div><div class="ml-3"><p class="text-sm text-gray-700"> Añadido al carrito </p></div></div>',1),V=[N];function z(s,t){return r(),n("div",L,V)}const H=d(I,[["render",z]]),M={data(){return{}},methods:{toggleMenu(){const s=this.$refs.collapseMenu;s.style.display=s.style.display==="block"?"none":"block"},goTo(s){window.location.href=s}},computed:{...x(["cartItems","cartItemsCounter"])}},B={class:"fixed top-0 left-0 right-0 z-20 shadow-md bg-white font-sans flex items-center justify-between py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]"},R=e("a",{href:"#",class:"block w-36 md:w-48"},[e("img",{src:"/storage/images/settings/logo.png",alt:"logo",class:"w-full md:hidden"}),e("img",{src:"/storage/images/settings/logo_large.png",alt:"logo",class:"hidden w-full md:block"})],-1),K={class:"flex flex-wrap px-10 overflow-x-auto"},q={id:"collapseMenu",ref:"collapseMenu",class:"lg:!flex justify-center lg:space-x-10 max-lg:space-y-3 max-lg:hidden w-full max-lg:mt-2"},D=h('<li class="max-lg:border-b max-lg:py-2"><a href="#home" class="hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block">Home</a></li><li class="max-lg:border-b max-lg:py-2"><a href="#about" class="hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block">Nosotros</a></li><li class="max-lg:border-b max-lg:py-2"><a href="#" class="hover:text-[#051650] hover:underline text-[#051650] font-bold text-[15px] block">Contacto</a></li><li class="max-lg:border-b max-lg:py-2"><a href="#products-selection" class="inline-block px-4 py-1 border border-transparent text-base font-medium rounded-md text-white black-background hover:bg-gray-700 hover:underline cursor-pointer">Comprar</a></li>',4),E=[D],P={class:"flex items-center"},Q=e("i",{class:"darkblue-text fa-solid fa-cart-shopping"},null,-1),U={class:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"};function W(s,t,m,_,a,l){return r(),n("header",null,[e("section",B,[R,e("div",K,[e("ul",q,E,512)]),e("div",P,[e("i",{class:"cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-facebook",onClick:t[0]||(t[0]=o=>l.goTo("https://www.facebook.com/profile.php?id=61557244334272"))}),e("i",{class:"cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-instagram",onClick:t[1]||(t[1]=o=>l.goTo("https://www.instagram.com/thrcorporation/?hl=es"))}),e("i",{class:"cursor-pointer darkblue-text text-2xl mx-2 fa-brands fa-whatsapp",onClick:t[2]||(t[2]=o=>l.goTo("https://wa.me/51934094501"))}),e("div",{class:"inline-block border-gray-300 border-l-2 pl-6 cursor-pointer relative",onClick:t[3]||(t[3]=o=>s.$emit("toggle-cart"))},[Q,e("span",U,i(s.cartItemsCounter),1)])])])])}const G=d(M,[["render",W]]),J={},X={class:"p-4 bg-white md:p-8 lg:p-10"},Y=h('<div class="mx-auto max-w-screen-xl text-center"><a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900"><img src="/storage/images/settings/logo_large.png" alt="logo" class="md:w-[170px] w-36"></a><p class="my-6 text-gray-500"> Transformando la minería con calidad y experiencia desde hace 20 años. </p><ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900"><li><a href="#" class="mr-4 hover:underline md:mr-6">Nosotros</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Comprar</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Contáctanos</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Libro de Reclamaciones</a></li></ul><span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">THR corporation</a>. Todos los derechos reservados.</span></div>',1),Z=[Y];function ee(s,t){return r(),n("footer",X,Z)}const te=d(J,[["render",ee]]),se={props:["isOpen"],computed:{...x(["cartItems"]),subtotal(){return this.cartItems.reduce((s,t)=>s+t.price*t.quantity,0)}},methods:{closeCart(){console.log("A"),this.$emit("update:is-open",!1)},handleRemoveFromCart(s){this.$store.dispatch("removeFromCart",s)}}},oe={class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},le=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),re={class:"fixed inset-0 overflow-hidden"},ae={class:"absolute inset-0 overflow-hidden"},ne={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},ie={class:"pointer-events-auto w-screen max-w-md"},ce={class:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl lg:pt-20 pt-12"},de={class:"flex-1 overflow-y-auto px-4 py-6 sm:px-6"},me={class:"flex items-start justify-between"},pe=e("h2",{class:"text-lg font-medium darkblue-text",id:"slide-over-title"}," Shopping cart ",-1),ue={class:"ml-3 flex h-7 items-center"},he=e("span",{class:"absolute -inset-0.5"},null,-1),xe=e("span",{class:"sr-only"},"Close panel",-1),_e=e("i",{class:"fa-solid fa-x"},null,-1),fe=[he,xe,_e],ge={class:"mt-8"},be={class:"flow-root"},ve={role:"list",class:"-my-6 divide-y divide-gray-200"},ye={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},we=["src","alt"],Ce={class:"ml-4 flex flex-1 flex-col"},ke={class:"flex justify-between text-base font-medium text-gray-900"},$e=["href"],je={class:"ml-4"},Se={class:"mt-1 text-sm text-gray-500"},Ae={class:"flex flex-1 items-end justify-between text-sm"},Oe={class:"text-gray-500"},Te={class:"flex"},Fe=["onClick"],Ie={class:"border-t border-gray-200 px-4 py-6 sm:px-6"},Le={class:"flex justify-between text-base font-medium darkblue-text"},Ne=e("p",null,"Subtotal",-1),Ve=e("p",{class:"mt-0.5 text-sm text-gray-500"},"Shipping and taxes calculated at checkout. ",-1),ze=e("div",{class:"mt-6"},[e("a",{href:"#",class:"flex items-center justify-center rounded-md border border-transparent blue-background px-6 py-3 text-base font-medium text-white shadow-sm hover:lightblue-background"},"Checkout")],-1),He={class:"mt-6 flex justify-center text-center text-sm text-gray-500"},Me=e("span",{"aria-hidden":"true"}," →",-1);function Be(s,t,m,_,a,l){return r(),n("div",{class:S({hidden:!m.isOpen})},[e("div",oe,[le,e("div",re,[e("div",ae,[e("div",ne,[e("div",ie,[e("div",ce,[e("div",de,[e("div",me,[pe,e("div",ue,[e("button",{type:"button",onClick:t[0]||(t[0]=(...o)=>l.closeCart&&l.closeCart(...o)),class:"relative -m-2 p-2 text-gray-400 hover:text-gray-500"},fe)])]),e("div",ge,[e("div",be,[e("ul",ve,[(r(!0),n($,null,j(s.cartItems,(o,u)=>(r(),n("li",{key:u,class:"flex py-6"},[e("div",ye,[e("img",{src:"/storage"+o.image_url,alt:o.name,class:"h-full w-full object-cover object-center"},null,8,we)]),e("div",Ce,[e("div",null,[e("div",ke,[e("h3",null,[e("a",{href:`/products/${o.id}`},i(o.name),9,$e)]),e("p",je,"$"+i(o.price),1)]),e("p",Se,i(o.color),1)]),e("div",Ae,[e("p",Oe,"Qty "+i(o.quantity),1),e("div",Te,[e("button",{type:"button",onClick:f=>l.handleRemoveFromCart(o),class:"font-medium blue-text hover:text-indigo-500"},"Remove",8,Fe)])])])]))),128))])])])]),e("div",Ie,[e("div",Le,[Ne,e("p",null,"$"+i(l.subtotal),1)]),Ve,ze,e("div",He,[e("p",null,[b(" or "),e("button",{onClick:t[1]||(t[1]=(...o)=>l.closeCart&&l.closeCart(...o)),type:"button",class:"font-medium blue-text hover:text-indigo-500"},[b(" Continue Shopping "),Me])])])])])])])])])])],2)}const Re=d(se,[["render",Be]]),Ke={components:{Alert:H,Header:G,Footer:te,Cart:Re},data(){return{isCartOpen:!1,alertKey:null}},methods:{showSuccessAlert(s){console.log(s),this.alertKey=s,setTimeout(()=>{this.alertKey=null},2e3)}},computed:{...x(["isAlertVisible"])}};function qe(s,t,m,_,a,l){const o=p("Header"),u=p("Cart"),f=p("Alert"),k=p("Footer");return r(),n("div",null,[c(o,{"is-cart-open":a.isCartOpen,onToggleCart:t[0]||(t[0]=g=>a.isCartOpen=!a.isCartOpen)},null,8,["is-cart-open"]),c(u,{"is-open":a.isCartOpen,"onUpdate:isOpen":t[1]||(t[1]=g=>a.isCartOpen=g)},null,8,["is-open"]),e("main",null,[A(s.$slots,"default")]),s.isAlertVisible?(r(),v(f,{key:0})):O("",!0),c(k)])}const De=d(Ke,[["render",qe]]),Ee={class:"pb-12"},Pe={style:{"margin-top":"10vh",height:"40vh",width:"100%","box-shadow":"0 -5px 5px -5px rgba(0, 0, 0, 1)"},id:"home"},Qe={class:"mt-6 max-w-9xl mx-auto sm:px-6 lg:px-8"},Ue={components:{Carrousel:y,ProductsSelection:w,About:C,Loader:F},data(){return{}}},ot=Object.assign(Ue,{__name:"Welcome",setup(s){return(t,m)=>(r(),v(De,null,{default:T(()=>[e("div",Ee,[e("div",Pe,[c(y)]),c(C),e("div",Qe,[c(w)])])]),_:1}))}});export{ot as default};
