import { ComponentStory, ComponentMeta } from "@storybook/react";

import CoverImage from "./index";

export default {
  title: "Atoms/CoverImage",
  component: CoverImage,
} as ComponentMeta<typeof CoverImage>;

const Template: ComponentStory<typeof CoverImage> = (args) => (
  <CoverImage {...args} />
);

export const EntrepreneurshipImage: ComponentStory<typeof CoverImage> =
  Template.bind({});
EntrepreneurshipImage.args = {
  url: "/res/cover images/2.png",
  styles: {},
};
