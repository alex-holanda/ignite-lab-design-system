var z=Object.defineProperty;var a=(e,t)=>z(e,"name",{value:t,configurable:!0});import{_ as S,$ as W,a as O}from"./index.module.2a0426e9.js";import{r as o}from"./index.71e3484a.js";import{r as q}from"./index.d7554aea.js";import{j as p,F as k,a as F}from"./jsx-runtime.31053ddc.js";import{I as K,r as X}from"./IconBase.esm.eadc1fd1.js";import{T as Y}from"./Text.5dbc4678.js";import"./iframe.25bbb72b.js";import"./clsx.m.256e9345.js";function H(e,t){const n=o.exports.createContext(t);function r(s){const{children:d,...l}=s,i=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:i},d)}a(r,"Provider");function c(s){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return a(c,"useContext"),r.displayName=e+"Provider",[r,c]}a(H,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function Z(e,t=[]){let n=[];function r(s,d){const l=o.exports.createContext(d),i=n.length;n=[...n,d];function u(f){const{scope:b,children:m,...h}=f,E=(b==null?void 0:b[e][i])||l,P=o.exports.useMemo(()=>h,Object.values(h));return o.exports.createElement(E.Provider,{value:P},m)}a(u,"Provider");function x(f,b){const m=(b==null?void 0:b[e][i])||l,h=o.exports.useContext(m);if(h)return h;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${s}\``)}return a(x,"useContext"),u.displayName=s+"Provider",[u,x]}a(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=a(()=>{const s=n.map(d=>o.exports.createContext(d));return a(function(l){const i=(l==null?void 0:l[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return c.scopeName=e,[r,G(c,...t)]}a(Z,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function G(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return a(function(s){const d=r.reduce((l,{useScope:i,scopeName:u})=>{const f=i(s)[`__scope${u}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(G,"$c512c27ab02ef895$var$composeContextScopes");function M(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}a(M,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function R(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}a(R,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function J({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[r,c]=Q({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:r,l=R(n),i=o.exports.useCallback(u=>{if(s){const f=typeof u=="function"?u(e):u;f!==e&&l(f)}else c(u)},[s,e,c,l]);return[d,i]}a(J,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Q({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=R(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}a(Q,"$71cd76cc60e0454e$var$useUncontrolledState");function V(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(V,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,l;if("borderBoxSize"in s){const i=s.borderBoxSize,u=Array.isArray(i)?i[0]:i;d=u.inlineSize,l=u.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}a(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const te=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],w=te.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...d}=r,l=s?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,S({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ne="Label",[Ae,oe]=H(ne,{id:void 0,controlRef:{current:null}}),re=a(e=>{const t=oe("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ce(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}a(ce,"$fe963b355347cc68$export$3e6543de14f8614f");const I=a(e=>{const{present:t,children:n}=e,r=se(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=O(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");I.displayName="Presence";function se(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,i]=ce(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const u=N(r.current);s.current=l==="mounted"?u:"none"},[l]),A(()=>{const u=r.current,x=c.current;if(x!==e){const b=s.current,m=N(u);e?i("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(x&&b!==m?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,i]),A(()=>{if(t){const u=a(f=>{const m=N(r.current).includes(f.animationName);f.target===t&&m&&q.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),x=a(f=>{f.target===t&&(s.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",x),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",x),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}a(se,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}a(N,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[ae,Te]=Z(B),[ie,ue]=ae(B),de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:c,checked:s,defaultChecked:d,required:l,disabled:i,value:u="on",onCheckedChange:x,...f}=e,[b,m]=o.exports.useState(null),h=O(t,$=>m($)),E=re(b),P=r||E,_=o.exports.useRef(!1),T=b?Boolean(b.closest("form")):!0,[y=!1,j]=J({prop:s,defaultProp:d,onChange:x});return o.exports.createElement(ie,{scope:n,state:y,disabled:i},o.exports.createElement(w.button,S({type:"button",role:"checkbox","aria-checked":v(y)?"mixed":y,"aria-labelledby":P,"aria-required":l,"data-state":D(y),"data-disabled":i?"":void 0,disabled:i,value:u},f,{ref:h,onKeyDown:M(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:M(e.onClick,$=>{j(L=>v(L)?!0:!L),T&&(_.current=$.isPropagationStopped(),_.current||$.stopPropagation())})})),T&&o.exports.createElement(pe,{control:b,bubbles:!_.current,name:c,value:u,checked:y,required:l,disabled:i,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ue(le,n);return o.exports.createElement(I,{present:r||v(s.state)||s.state===!0},o.exports.createElement(w.span,S({"data-state":D(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pe=a(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),d=V(n),l=ee(t);return o.exports.useEffect(()=>{const i=s.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==n&&f){const b=new Event("click",{bubbles:r});i.indeterminate=v(n),f.call(i,v(n)?!1:n),i.dispatchEvent(b)}},[d,n,r]),o.exports.createElement("input",S({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}a(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}a(D,"$e698a72e93240346$var$getState");const be=de,xe=fe;var C=new Map;C.set("bold",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(k,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var me=a(function(t,n){return X(t,n,C)},"renderPath"),U=o.exports.forwardRef(function(e,t){return p(K,{...Object.assign({ref:t},e,{renderPath:me})})});U.displayName="Check";const he=U;function g(e){return p(be,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:p(xe,{asChild:!0,children:p(he,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}a(g,"Checkbox");try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:g.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Le={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text> Lembrar-me de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:50,line:21},endLoc:{col:1,line:23},startBody:{col:50,line:21},endBody:{col:1,line:23}}}}},title:"Components/Checkbox",component:g,decorators:[e=>F("div",{className:"flex items-center gap-2",children:[e(),p(Y,{children:" Lembrar-me de mim por 30 dias"})]})]},$e=a(e=>p(g,{...e}),"Template"),ve=$e.bind({});ve.args={};const Me=["Default"];export{ve as Default,Me as __namedExportsOrder,Le as default};
//# sourceMappingURL=Checkbox.stories.0f6aab50.js.map
