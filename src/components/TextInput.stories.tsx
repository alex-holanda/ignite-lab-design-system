import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
} as ComponentMeta<typeof TextInput.Root>;

const Template: ComponentStory<typeof TextInput.Root> = (args) => (
  <TextInput.Root {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>,
    <TextInput.Input placeholder="Type your e-mail address" />,
  ],
};
Default.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  children: [<TextInput.Input placeholder="Type your e-mail address" />],
};
WithoutIcon.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};
