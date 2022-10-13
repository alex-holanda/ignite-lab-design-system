var c=Object.defineProperty;var e=(t,n)=>c(t,"name",{value:n,configurable:!0});import{c as p}from"./clsx.m.256e9345.js";import{$ as i}from"./index.module.2a0426e9.js";import{j as r}from"./jsx-runtime.31053ddc.js";import"./index.71e3484a.js";import"./iframe.25bbb72b.js";function o({children:t,asChild:n,className:a,...s}){return r(n?i:"button",{className:p("py-3 px-4 font-semibold text-black bg-cyan-500 text-sm w-full transition-colors hover:bg-cyan-300 rounded focus:ring-2 ring-white",a),...s,children:t})}e(o,"Button");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch{}const C={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Create account"
};

`,locationsMap:{default:{startLoc:{col:48,line:18},endLoc:{col:78,line:18},startBody:{col:48,line:18},endBody:{col:78,line:18}}}}},title:"Components/Button",component:o,argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},l=e(t=>r(o,{...t}),"Template"),m=l.bind({});m.args={children:"Create account"};const x=["Default"];export{m as Default,x as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories.4b47d3ca.js.map
