import{_ as c}from"./AppLayout-lEfrIjKd.js";import p from"./DeleteUserForm-BgAMDmwS.js";import l from"./LogoutOtherBrowserSessionsForm-cc3vx3Oe.js";import{S as s}from"./SectionBorder-D2LCfwHj.js";import f from"./TwoFactorAuthenticationForm-cbhVvCJz.js";import u from"./UpdatePasswordForm-CxKGxeqp.js";import _ from"./UpdateProfileInformationForm-DIPTS9y3.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-DuM67jvC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-BYvOuPL4.js";import"./SectionTitle-BXV9WUwU.js";import"./DangerButton-D4ndiTjj.js";import"./TextInput-BXacI_1J.js";import"./SecondaryButton-B-vwbMSG.js";import"./ActionMessage-BTbrELJw.js";import"./PrimaryButton-CKSZ_fTo.js";import"./InputLabel-D4L4EEiD.js";import"./FormSection-D1iLcJxX.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
