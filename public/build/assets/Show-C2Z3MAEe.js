import{_ as c}from"./AppLayout-CfxVgcA4.js";import p from"./DeleteUserForm-CDCgI_Tf.js";import l from"./LogoutOtherBrowserSessionsForm-DLVxNCyx.js";import{S as s}from"./SectionBorder-BMs3VMds.js";import f from"./TwoFactorAuthenticationForm-C_RjZtWu.js";import u from"./UpdatePasswordForm-CkTy1hpu.js";import _ from"./UpdateProfileInformationForm-cASbbMZ9.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-DJqBVGQy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-HUeYGFvC.js";import"./SectionTitle-B5jH_g2H.js";import"./DangerButton-BCi1pYOY.js";import"./TextInput-DgsGwRsx.js";import"./SecondaryButton-CfKuU8RN.js";import"./ActionMessage-My1p01vT.js";import"./PrimaryButton-7HsPj3rv.js";import"./InputLabel-Di7rnHaR.js";import"./FormSection-7mqi37jQ.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};