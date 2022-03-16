import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./index";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header: ComponentStory<typeof Header> = Template.bind({});
header.args = {
  sx: {
    position: "absolute",
    left: 0,
  },
};
