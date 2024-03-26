import{J as se,K as m,C as k,d as u,L as b,M as x,s as je,m as Ee,x as Oe,k as _e,D as ee,N as xe,F as Te,c as ye,w as te,I as O,o as I,b as ne,e as ae,h as Ie,E as De,a as z,t as oe}from"./app-BKAHQfk0.js";import{L as Be}from"./Loader-B0nar6BL.js";import{_ as Pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ke={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Re({config:t,slidesCount:n}){const{snapAlign:e,wrapAround:i,itemsToShow:r=1}=t;if(i)return Math.max(n-1,0);let l;switch(e){case"start":l=n-r;break;case"end":l=n-1;break;case"center":case"center-odd":l=n-Math.ceil((r-.5)/2);break;case"center-even":l=n-Math.ceil(r/2);break;default:l=0;break}return Math.max(l,0)}function Ve({config:t,slidesCount:n}){const{wrapAround:e,snapAlign:i,itemsToShow:r=1}=t;let l=0;if(e||r>n)return l;switch(i){case"start":l=0;break;case"end":l=r-1;break;case"center":case"center-odd":l=Math.floor((r-1)/2);break;case"center-even":l=Math.floor((r-2)/2);break;default:l=0;break}return l}function ie({val:t,max:n,min:e}){return n<e?t:Math.min(Math.max(t,e),n)}function $e({config:t,currentSlide:n,slidesCount:e}){const{snapAlign:i,wrapAround:r,itemsToShow:l=1}=t;let f=n;switch(i){case"center":case"center-odd":f-=(l-1)/2;break;case"center-even":f-=(l-2)/2;break;case"end":f-=l-1;break}return r?f:ie({val:f,max:e-l,min:0})}function Ae(t){return t?t.reduce((n,e)=>{var i;return e.type===Te?[...n,...Ae(e.children)]:((i=e.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...n,e]:n},[]):[]}function X({val:t,max:n,min:e=0}){return t>n?X({val:t-(n+1),max:n,min:e}):t<e?X({val:t+(n+1),max:n,min:e}):t}function ze(t,n){let e;return n?function(...i){const r=this;e||(t.apply(r,i),e=!0,setTimeout(()=>e=!1,n))}:t}function Xe(t,n){let e;return function(...i){e&&clearTimeout(e),e=setTimeout(()=>{t(...i),e=null},n)}}function Ce(t="",n={}){return Object.entries(n).reduce((e,[i,r])=>e.replace(`{${i}}`,String(r)),t)}var Ue=se({name:"ARIA",setup(){const t=m("config",k(Object.assign({},v))),n=m("currentSlide",u(0)),e=m("slidesCount",u(0));return()=>b("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ce(t.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:e.value}))}}),Ye=se({name:"Carousel",props:ke,setup(t,{slots:n,emit:e,expose:i}){var r;const l=u(null),f=u([]),s=u(0),c=u(0),o=k(Object.assign({},v));let w=Object.assign({},v),h;const d=u((r=t.modelValue)!==null&&r!==void 0?r:0),L=u(0),D=u(0),y=u(0),N=u(0);let M,U;x("config",o),x("slidesCount",c),x("currentSlide",d),x("maxSlide",y),x("minSlide",N),x("slideWidth",s);function Y(){h=Object.assign({},t.breakpoints),w=Object.assign(Object.assign(Object.assign({},w),t),{i18n:Object.assign(Object.assign({},w.i18n),t.i18n),breakpoints:void 0}),ue(w)}function B(){if(!h||!Object.keys(h).length)return;const a=Object.keys(h).map(g=>Number(g)).sort((g,_)=>+_-+g);let p=Object.assign({},w);a.some(g=>{const _=window.matchMedia(`(min-width: ${g}px)`).matches;return _&&(p=Object.assign(Object.assign({},p),h[g])),_}),ue(p)}function ue(a){Object.entries(a).forEach(([p,g])=>o[p]=g)}const ce=Xe(()=>{B(),j()},16);function j(){if(!l.value)return;const a=l.value.getBoundingClientRect();s.value=a.width/o.itemsToShow}function H(){c.value<=0||(D.value=Math.ceil((c.value-1)/2),y.value=Re({config:o,slidesCount:c.value}),N.value=Ve({config:o,slidesCount:c.value}),o.wrapAround||(d.value=ie({val:d.value,max:y.value,min:N.value})))}je(()=>{Ee(()=>j()),setTimeout(()=>j(),1e3),B(),ge(),window.addEventListener("resize",ce,{passive:!0}),e("init")}),Oe(()=>{U&&clearTimeout(U),M&&clearInterval(M),window.removeEventListener("resize",ce,{passive:!0})});let S=!1;const P={x:0,y:0},R={x:0,y:0},T=k({x:0,y:0}),V=u(!1),W=u(!1),Le=()=>{V.value=!0},Me=()=>{V.value=!1};function de(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(S=a.type==="touchstart",S||a.preventDefault(),!(!S&&a.button!==0||A.value)&&(P.x=S?a.touches[0].clientX:a.clientX,P.y=S?a.touches[0].clientY:a.clientY,document.addEventListener(S?"touchmove":"mousemove",ve,!0),document.addEventListener(S?"touchend":"mouseup",fe,!0)))}const ve=ze(a=>{W.value=!0,R.x=S?a.touches[0].clientX:a.clientX,R.y=S?a.touches[0].clientY:a.clientY;const p=R.x-P.x,g=R.y-P.y;T.y=g,T.x=p},o.throttle);function fe(){const a=o.dir==="rtl"?-1:1,p=Math.sign(T.x)*.4,g=Math.round(T.x/s.value+p)*a;if(g&&!S){const _=J=>{J.stopPropagation(),window.removeEventListener("click",_,!0)};window.addEventListener("click",_,!0)}C(d.value-g),T.x=0,T.y=0,W.value=!1,document.removeEventListener(S?"touchmove":"mousemove",ve,!0),document.removeEventListener(S?"touchend":"mouseup",fe,!0)}function ge(){!o.autoplay||o.autoplay<=0||(M=setInterval(()=>{o.pauseAutoplayOnHover&&V.value||$()},o.autoplay))}function me(){M&&(clearInterval(M),M=null),ge()}const A=u(!1);function C(a){const p=o.wrapAround?a:ie({val:a,max:y.value,min:N.value});d.value===p||A.value||(e("slide-start",{slidingToIndex:a,currentSlideIndex:d.value,prevSlideIndex:L.value,slidesCount:c.value}),A.value=!0,L.value=d.value,d.value=p,U=setTimeout(()=>{if(o.wrapAround){const g=X({val:p,max:y.value,min:0});g!==d.value&&(d.value=g,e("loop",{currentSlideIndex:d.value,slidingToIndex:a}))}e("update:modelValue",d.value),e("slide-end",{currentSlideIndex:d.value,prevSlideIndex:L.value,slidesCount:c.value}),A.value=!1,me()},o.transition))}function $(){C(d.value+o.itemsToScroll)}function F(){C(d.value-o.itemsToScroll)}const pe={slideTo:C,next:$,prev:F};x("nav",pe),x("isSliding",A);const he=_e(()=>$e({config:o,currentSlide:d.value,slidesCount:c.value}));x("slidesToScroll",he);const Ne=_e(()=>{const a=o.dir==="rtl"?-1:1,p=he.value*s.value*a;return{transform:`translateX(${T.x-p}px)`,transition:`${A.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${c.value*s.value}px`:"",width:"100%"}});function be(){Y(),B(),H(),j(),me()}Object.keys(ke).forEach(a=>{["modelValue"].includes(a)||ee(()=>t[a],be)}),ee(()=>t.modelValue,a=>{a!==d.value&&C(Number(a))}),ee(c,H),e("before-init"),Y();const we={config:o,slidesCount:c,slideWidth:s,next:$,prev:F,slideTo:C,currentSlide:d,maxSlide:y,minSlide:N,middleSlide:D};i({updateBreakpointsConfigs:B,updateSlidesData:H,updateSlideWidth:j,initDefaultConfigs:Y,restartCarousel:be,slideTo:C,next:$,prev:F,nav:pe,data:we});const G=n.default||n.slides,q=n.addons,Se=k(we);return()=>{const a=Ae(G==null?void 0:G(Se)),p=(q==null?void 0:q(Se))||[];a.forEach((K,Q)=>K.props.index=Q);let g=a;if(o.wrapAround){const K=a.map((Z,E)=>xe(Z,{index:-a.length+E,isClone:!0,key:`clone-before-${E}`})),Q=a.map((Z,E)=>xe(Z,{index:a.length+E,isClone:!0,key:`clone-after-${E}`}));g=[...K,...a,...Q]}f.value=a,c.value=Math.max(a.length,1);const _=b("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:o.mouseDrag?de:null,onTouchstartPassiveCapture:o.touchDrag?de:null},g),J=b("div",{class:"carousel__viewport"},_);return b("section",{ref:l,class:{carousel:!0,"is-sliding":A.value,"is-dragging":W.value,"is-hover":V.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Le,onMouseleave:Me},[J,p,b(Ue)])}}}),re;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(re||(re={}));const He={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function We(t){return t in re}const le=t=>{const n=m("config",k(Object.assign({},v))),e=String(t.name),i=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!We(e))return;const r=He[e],l=b("path",{d:r}),f=n.i18n[i]||t.title||e,s=b("title",f);return b("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[s,l])};le.props={name:String,title:String};const Fe=(t,{slots:n,attrs:e})=>{const{next:i,prev:r}=n||{},l=m("config",k(Object.assign({},v))),f=m("maxSlide",u(1)),s=m("minSlide",u(1)),c=m("currentSlide",u(1)),o=m("nav",{}),{dir:w,wrapAround:h,i18n:d}=l,L=w==="rtl",D=b("button",{type:"button",class:["carousel__prev",!h&&c.value<=s.value&&"carousel__prev--disabled",e==null?void 0:e.class],"aria-label":d.ariaPreviousSlide,onClick:o.prev},(r==null?void 0:r())||b(le,{name:L?"arrowRight":"arrowLeft"})),y=b("button",{type:"button",class:["carousel__next",!h&&c.value>=f.value&&"carousel__next--disabled",e==null?void 0:e.class],"aria-label":d.ariaNextSlide,onClick:o.next},(i==null?void 0:i())||b(le,{name:L?"arrowLeft":"arrowRight"}));return[D,y]},Ge=()=>{const t=m("config",k(Object.assign({},v))),n=m("maxSlide",u(1)),e=m("minSlide",u(1)),i=m("currentSlide",u(1)),r=m("nav",{}),l=s=>X({val:i.value,max:n.value,min:0})===s,f=[];for(let s=e.value;s<n.value+1;s++){const c=b("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":l(s)},"aria-label":Ce(t.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>r.slideTo(s)}),o=b("li",{class:"carousel__pagination-item",key:s},c);f.push(o)}return b("ol",{class:"carousel__pagination"},f)};var qe=se({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:n}){const e=m("config",k(Object.assign({},v))),i=m("currentSlide",u(0)),r=m("slidesToScroll",u(0)),l=m("isSliding",u(!1)),f=()=>t.index===i.value,s=()=>t.index===i.value-1,c=()=>t.index===i.value+1,o=()=>{const w=Math.floor(r.value),h=Math.ceil(r.value+e.itemsToShow-1);return t.index>=w&&t.index<=h};return()=>{var w;return b("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":o(),"carousel__slide--active":f(),"carousel__slide--prev":s(),"carousel__slide--next":c(),"carousel__slide--sliding":l.value},"aria-hidden":!o()},(w=n.default)===null||w===void 0?void 0:w.call(n))}}});const Je={data(){return{slides:[{background_img:"/storage/images/settings/banner/1.jpg",title:"Tu Aliado en Minería",subtitle:"Equipos y Repuestos de Primera Calidad",cta:"Descubre Más"},{background_img:"storage/images/settings/banner/2.jpg",title:"Eficiencia y Productividad",subtitle:"Soluciones Especializadas para la Minería",cta:"Nuestros Servicios"},{background_img:"storage/images/settings/banner/3.jpg",title:"Liderando con Excelencia",subtitle:"Optimiza Tu Operación Minera",cta:"Contáctanos"}],imageLoaded:!1}},components:{Carousel:Ye,Slide:qe,Loader:Be,Pagination:Ge,Navigation:Fe},mounted(){this.preloadImages()},methods:{preloadImages(){let t=this.slides.map(e=>e.background_img),n=0;t.forEach(e=>{const i=new Image;i.onload=()=>{n++,n===t.length&&(this.imageLoaded=!0)},i.src=e})}}},Ke={class:"h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center"},Qe={class:"text-white text-4xl font-bold mb-4"},Ze={class:"text-white text-lg mb-4"},et={href:"#",class:"inline-block bg-white text-black px-6 py-2 text-sm font-medium rounded hover:bg-gray-100"},tt={key:1,class:"h-full w-full flex justify-center items-center"};function nt(t,n,e,i,r,l){const f=O("Loader"),s=O("slide"),c=O("navigation"),o=O("pagination"),w=O("carousel");return I(),ye(w,{"items-to-show":1,wrapAround:!0,autoplay:5e3},{addons:te(()=>[ne(c),ne(o)]),default:te(()=>[(I(!0),ae(Te,null,Ie(r.slides,h=>(I(),ye(s,{key:h.id,class:"relative h-80 w-full"},{default:te(()=>[r.imageLoaded?(I(),ae("div",{key:0,class:"h-full w-full bg-cover bg-no-repeat bg-center",style:De({backgroundImage:"url("+h.background_img+")"})},[z("div",Ke,[z("h1",Qe,oe(h.title),1),z("p",Ze,oe(h.subtitle),1),z("a",et,oe(h.cta),1)])],4)):(I(),ae("div",tt,[ne(f)]))]),_:2},1024))),128))]),_:1})}const rt=Pe(Je,[["render",nt]]);export{rt as default};
