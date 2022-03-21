import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyLibrary from "./index";

export default {
  title: "Pages/My Library",
  component: MyLibrary,
} as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = (args) => (
  <MyLibrary {...args} />
);

export const myLibrary: ComponentStory<typeof MyLibrary> = Template.bind({});
myLibrary.args = {};
