import{d as z,a9 as B,C as v,br as F,i as s,z as c,w as k,c as u,n,A as r,f as l,e as C,H as I,a6 as b,t as h,B as N,P as S,aw as y,ad as V,b2 as j,a8 as A}from"./DvFnXd1J.js";const L={slots:{root:"relative",wrapper:"",leading:"inline-flex items-center justify-center",leadingIcon:"size-5 shrink-0 text-[var(--ui-primary)]",title:"text-base text-pretty font-semibold text-[var(--ui-text-highlighted)]",description:"text-[15px] text-pretty text-[var(--ui-text-muted)]"},variants:{orientation:{horizontal:{root:"flex items-start gap-2.5",leading:"p-0.5"},vertical:{leading:"mb-2.5"}},title:{true:{description:"mt-1"}}}},T=A;var _;const U=y({extend:y(L),...((_=T.uiPro)==null?void 0:_.pageFeature)||{}}),D=z({inheritAttrs:!1,__name:"PageFeature",props:{as:{},icon:{},title:{},description:{},orientation:{default:"horizontal"},to:{},target:{},onClick:{},class:{},ui:{}},setup(w){const t=w,a=B(),i=v(()=>U({orientation:t.orientation,title:!!t.title||!!a.title})),P=v(()=>(t.title||a.title&&F(a.title())||"Card link").trim());return(e,d)=>{var p;const $=V,x=j;return s(),c(N(S),{as:e.as,"data-orientation":e.orientation,class:n(i.value.root({class:[t.class,(p=t.ui)==null?void 0:p.root]})),onClick:e.onClick},{default:k(()=>{var m,g;return[e.icon||a.leading?(s(),u("div",{key:0,class:n(i.value.leading({class:(m=t.ui)==null?void 0:m.leading}))},[r(e.$slots,"leading",{},()=>{var o;return[e.icon?(s(),c($,{key:0,name:e.icon,class:n(i.value.leadingIcon({class:(o=t.ui)==null?void 0:o.leadingIcon}))},null,8,["name","class"])):l("",!0)]})],2)):l("",!0),C("div",{class:n(i.value.wrapper({class:(g=t.ui)==null?void 0:g.wrapper}))},[e.to?(s(),c(x,I({key:0,"aria-label":P.value},{to:e.to,target:e.target,...e.$attrs},{class:"focus:outline-none peer",tabindex:"-1"}),{default:k(()=>d[0]||(d[0]=[C("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):l("",!0),r(e.$slots,"default",{},()=>{var o,f;return[e.title||a.title?(s(),u("div",{key:0,class:n(i.value.title({class:(o=t.ui)==null?void 0:o.title}))},[r(e.$slots,"title",{},()=>[b(h(e.title),1)])],2)):l("",!0),e.description||a.description?(s(),u("div",{key:1,class:n(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[r(e.$slots,"description",{},()=>[b(h(e.description),1)])],2)):l("",!0)]})],2)]}),_:3},8,["as","data-orientation","class","onClick"])}}}),H=Object.assign(D,{__name:"UPageFeature"});export{H as default};