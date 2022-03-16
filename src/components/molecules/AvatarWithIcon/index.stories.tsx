import AvatarWithIcon from "./index";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/Avatar",
  component: AvatarWithIcon,
  // args: {
  //   children: "Test Avatar",
  // },
  argTypes: { onClick: { action: "clicked" } },
};

export const avatar: ComponentStory<typeof AvatarWithIcon> = () => (
  <AvatarWithIcon>A</AvatarWithIcon>
);
