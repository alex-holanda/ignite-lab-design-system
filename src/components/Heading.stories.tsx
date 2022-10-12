import { ComponentStory, ComponentMeta } from "@storybook/react";

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
