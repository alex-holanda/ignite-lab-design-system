import { ComponentStory, ComponentMeta } from "@storybook/react";

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
