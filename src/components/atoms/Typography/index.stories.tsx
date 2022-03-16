import { ComponentStory } from "@storybook/react";
import TypographyText from "./index";

export default {
  title: "Atoms/Typography",
  component: TypographyText,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "heading",
          "subtitle1",
          "subtitle2",
          "subtitle3",
          "body1",
          "body2",
          "body3",
          "caption1",
          "caption2",
          "caption3",
        ],
      },
    },
  },
  // args: {
  //   children: "Test Typography",
  // },
};

const Template: ComponentStory<typeof TypographyText> = (args) => (
  <TypographyText {...args} />
);

export const heading = Template.bind({});
heading.args = {
  variant: "heading",
  component: "div",
  children: "My Text",
};
