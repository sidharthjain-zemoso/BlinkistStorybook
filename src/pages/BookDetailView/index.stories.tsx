import { ComponentStory, ComponentMeta } from "@storybook/react";
import BookDetailView from "./index";

export default {
  title: "Pages/Book Detail View",
  component: BookDetailView,
} as ComponentMeta<typeof BookDetailView>;

const Template: ComponentStory<typeof BookDetailView> = (args) => (
  <BookDetailView {...args} />
);

export const bookDetailView: ComponentStory<typeof BookDetailView> =
  Template.bind({});
bookDetailView.args = {};
