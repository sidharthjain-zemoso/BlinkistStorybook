import { ComponentStory, ComponentMeta } from "@storybook/react";
import Entrepreneurship from "./index";

export default {
  title: "Pages/Entrepreneurship",
  component: Entrepreneurship,
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = (args) => (
  <Entrepreneurship {...args} />
);

export const entrepreneurship: ComponentStory<typeof Entrepreneurship> =
  Template.bind({});
entrepreneurship.args = {};
