import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./index";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ClockIcon: ComponentStory<typeof Icon> = Template.bind({});
ClockIcon.args = {
  url: "/res/icons/clock.png",
  sx: {},
};
