var i=Object.defineProperty;var o=(e,r)=>i(e,"name",{value:r,configurable:!0});import{T as t}from"./Text.5dbc4678.js";import{j as l}from"./jsx-runtime.31053ddc.js";import"./clsx.m.256e9345.js";import"./index.module.2a0426e9.js";import"./index.71e3484a.js";import"./iframe.25bbb72b.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

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
  children: <p>Lorem ipsum.</p>,
  size: "md",
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
`,locationsMap:{default:{startLoc:{col:46,line:18},endLoc:{col:74,line:18},startBody:{col:46,line:18},endBody:{col:74,line:18}},small:{startLoc:{col:46,line:18},endLoc:{col:74,line:18},startBody:{col:46,line:18},endBody:{col:74,line:18}},large:{startLoc:{col:46,line:18},endLoc:{col:74,line:18},startBody:{col:46,line:18},endBody:{col:74,line:18}},"custom-component":{startLoc:{col:46,line:18},endLoc:{col:74,line:18},startBody:{col:46,line:18},endBody:{col:74,line:18}}}}},title:"Components/Text",component:t,argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},n=o(e=>l(t,{...e}),"Template"),a=n.bind({});a.args={children:"Lorem ipsum.",size:"md"};const m=n.bind({});m.args={children:"Lorem ipsum.",size:"sm"};const p=n.bind({});p.args={children:"Lorem ipsum.",size:"lg"};const s=n.bind({});s.args={asChild:!0,children:l("p",{children:"Lorem ipsum."}),size:"md"};s.argTypes={children:{table:{disable:!0}},asChild:{table:{disable:!0}}};const x=["Default","Small","Large","CustomComponent"];export{s as CustomComponent,a as Default,p as Large,m as Small,x as __namedExportsOrder,L as default};
//# sourceMappingURL=Text.stories.3696d706.js.map
