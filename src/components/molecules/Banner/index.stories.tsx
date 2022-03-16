import { ComponentStory } from "@storybook/react";
import CardBanner from "./index";

export default {
  title: "Molecules/Card Banner",
  component: CardBanner,
};

const Template: ComponentStory<typeof CardBanner> = (args) => (
  <CardBanner {...args} />
);

export const cardBanner = Template.bind({});
cardBanner.args = {};
