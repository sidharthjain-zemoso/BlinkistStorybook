import Explore from "./index";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/Explore",
  component: Explore,
  // args: {
  //   children: "Test Avatar",
  // },
  argTypes: { onClick: { action: "clicked" } },
};

export const explore: ComponentStory<typeof Explore> = () => <Explore />;
