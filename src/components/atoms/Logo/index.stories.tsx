import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "./index";

export default {
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const BlinkistLogo: ComponentStory<typeof Logo> = Template.bind({});
BlinkistLogo.args = {
  url: "/res/logo/Blinklist.png",
  sx: {},
};
