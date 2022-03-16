import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconText from "./index";

export default {
  title: "Molecules/Icon Text",
  component: IconText,
} as ComponentMeta<typeof IconText>;

const Template: ComponentStory<typeof IconText> = (args) => (
  <IconText {...args} />
);

export const iconText: ComponentStory<typeof IconText> = Template.bind({});
iconText.args = {
  icon: "user",
  iconAtEnd: true,
  text: "Some Text",
  iconHeight: "20px",
  iconWidth: "15px",
  textVariant: "subtitle1",
};
