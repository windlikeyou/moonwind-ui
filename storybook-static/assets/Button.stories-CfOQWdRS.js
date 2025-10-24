import{d as R,c as U,a as V,o as X,r as Y,n as Z}from"./vue.esm-bundler-CTDV1tcd.js";import{_ as tt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const et=["disabled","type"],nt=R({name:"HkButton",__name:"Button",props:{type:{default:"default"},size:{default:"medium"},nativeType:{default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}},emits:["click"],setup(p,{emit:G}){const e=p,J=G,N=U(()=>["hk-button",`hk-button--${e.type}`,`hk-button--${e.size}`,{"hk-button--disabled":e.disabled,"hk-button--loading":e.loading,"hk-button--round":e.round,"hk-button--circle":e.circle}]),Q=m=>{e.disabled||e.loading||J("click",m)};return(m,ot)=>(X(),V("button",{class:Z(N.value),disabled:p.disabled,type:p.nativeType,onClick:Q},[Y(m.$slots,"default",{},void 0,!0)],10,et))}}),t=tt(nt,[["__scopeId","data-v-9052430c"]]),st={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"Hi-Kits 按钮组件，支持多种类型、尺寸和状态。"}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary","success","warning","danger"],description:"按钮类型"},size:{control:{type:"select"},options:["small","medium","large"],description:"按钮尺寸"},disabled:{control:{type:"boolean"},description:"是否禁用"},loading:{control:{type:"boolean"},description:"是否加载中"},onClick:{action:"clicked"}},args:{onClick:()=>{}}},n={render:()=>({components:{HkButton:t},template:"<HkButton>Default Button</HkButton>"})},o={render:()=>({components:{HkButton:t},template:'<HkButton type="primary">Primary Button</HkButton>'})},a={render:()=>({components:{HkButton:t},template:'<HkButton type="success">Success Button</HkButton>'})},r={render:()=>({components:{HkButton:t},template:'<HkButton type="warning">Warning Button</HkButton>'})},s={render:()=>({components:{HkButton:t},template:'<HkButton type="danger">Danger Button</HkButton>'})},u={render:()=>({components:{HkButton:t},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton size="small">Small</HkButton>
        <HkButton size="medium">Medium</HkButton>
        <HkButton size="large">Large</HkButton>
      </div>
    `})},c={render:()=>({components:{HkButton:t},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton disabled>Default Disabled</HkButton>
        <HkButton type="primary" disabled>Primary Disabled</HkButton>
        <HkButton type="success" disabled>Success Disabled</HkButton>
      </div>
    `})},i={render:()=>({components:{HkButton:t},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton loading>Loading</HkButton>
        <HkButton type="primary" loading>Primary Loading</HkButton>
        <HkButton type="success" loading>Success Loading</HkButton>
      </div>
    `})},l={render:()=>({components:{HkButton:t},template:`
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <HkButton>Default</HkButton>
        <HkButton type="primary">Primary</HkButton>
        <HkButton type="secondary">Secondary</HkButton>
        <HkButton type="success">Success</HkButton>
        <HkButton type="warning">Warning</HkButton>
        <HkButton type="danger">Danger</HkButton>
      </div>
    `})},d={render:()=>({components:{HkButton:t},template:'<HkButton type="primary" @click="handleClick">Click me!</HkButton>',methods:{handleClick(){alert("Button clicked!")}}})};var k,B,H;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton>Default Button</HkButton>'
  })
}`,...(H=(B=n.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton type="primary">Primary Button</HkButton>'
  })
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,S,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton type="success">Success Button</HkButton>'
  })
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,x,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton type="warning">Warning Button</HkButton>'
  })
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,z,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton type="danger">Danger Button</HkButton>'
  })
}`,...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,_,w;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton size="small">Small</HkButton>
        <HkButton size="medium">Medium</HkButton>
        <HkButton size="large">Large</HkButton>
      </div>
    \`
  })
}`,...(w=(_=u.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var W,T,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton disabled>Default Disabled</HkButton>
        <HkButton type="primary" disabled>Primary Disabled</HkButton>
        <HkButton type="success" disabled>Success Disabled</HkButton>
      </div>
    \`
  })
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var $,A,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton loading>Loading</HkButton>
        <HkButton type="primary" loading>Primary Loading</HkButton>
        <HkButton type="success" loading>Success Loading</HkButton>
      </div>
    \`
  })
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,K,O;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <HkButton>Default</HkButton>
        <HkButton type="primary">Primary</HkButton>
        <HkButton type="secondary">Secondary</HkButton>
        <HkButton type="success">Success</HkButton>
        <HkButton type="warning">Warning</HkButton>
        <HkButton type="danger">Danger</HkButton>
      </div>
    \`
  })
}`,...(O=(K=l.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var j,q,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      HkButton
    },
    template: '<HkButton type="primary" @click="handleClick">Click me!</HkButton>',
    methods: {
      handleClick() {
        alert('Button clicked!');
      }
    }
  })
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ut=["Default","Primary","Success","Warning","Danger","Sizes","Disabled","Loading","AllTypes","Interactive"];export{l as AllTypes,s as Danger,n as Default,c as Disabled,d as Interactive,i as Loading,o as Primary,u as Sizes,a as Success,r as Warning,ut as __namedExportsOrder,st as default};
