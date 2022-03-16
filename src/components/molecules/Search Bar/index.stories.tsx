import { ComponentStory } from "@storybook/react";
import SearchBar from "./index";

export default {
  title: "Molecules/Search",
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const search = Template.bind({});
search.args = {};
