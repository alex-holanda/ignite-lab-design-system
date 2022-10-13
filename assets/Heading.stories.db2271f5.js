var d=Object.defineProperty;var a=(e,t)=>d(e,"name",{value:t,configurable:!0});import{c as m}from"./clsx.m.256e9345.js";import{$ as c}from"./index.module.2a0426e9.js";import{j as l}from"./jsx-runtime.31053ddc.js";import"./index.71e3484a.js";import"./iframe.25bbb72b.js";function n({size:e="md",children:t,className:i,asChild:r}){return l(r?c:"h2",{className:m("text-gray-100 font-bold font-sans",{"text-lg":e==="sm","text-xl":e==="md","text-2xl":e==="lg"},i),children:t})}a(n,"Heading");try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Heading.tsx#Heading"]={docgenInfo:n.__docgenInfo,name:"Heading",path:"src/components/Heading.tsx#Heading"})}catch{}const H={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum.",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  children: "Lorem ipsum.",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  children: "Lorem ipsum.",
  size: "lg",
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  asChild: true,
  children: <h1>Lorem ipsum.</h1>,
  size: "lg",
};
CustomComponent.argTypes = {
  children: {
    table: {
      disable: true
    }
  },
  asChild: {
    table: {
      disable: true
    }
  }
}
`,locationsMap:{default:{startLoc:{col:49,line:18},endLoc:{col:80,line:18},startBody:{col:49,line:18},endBody:{col:80,line:18}},small:{startLoc:{col:49,line:18},endLoc:{col:80,line:18},startBody:{col:49,line:18},endBody:{col:80,line:18}},large:{startLoc:{col:49,line:18},endLoc:{col:80,line:18},startBody:{col:49,line:18},endBody:{col:80,line:18}},"custom-component":{startLoc:{col:49,line:18},endLoc:{col:80,line:18},startBody:{col:49,line:18},endBody:{col:80,line:18}}}}},title:"Components/Heading",component:n,argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},o=a(e=>l(n,{...e}),"Template"),p=o.bind({});p.args={children:"Lorem ipsum.",size:"md"};const g=o.bind({});g.args={children:"Lorem ipsum.",size:"sm"};const u=o.bind({});u.args={children:"Lorem ipsum.",size:"lg"};const s=o.bind({});s.args={asChild:!0,children:l("h1",{children:"Lorem ipsum."}),size:"lg"};s.argTypes={children:{table:{disable:!0}},asChild:{table:{disable:!0}}};const _=["Default","Small","Large","CustomComponent"];export{s as CustomComponent,p as Default,u as Large,g as Small,_ as __namedExportsOrder,H as default};
//# sourceMappingURL=Heading.stories.db2271f5.js.map
