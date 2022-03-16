import { ComponentStory } from "@storybook/react";
import BookCard from "./index";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "defaultCard",
          "addToLibCard",
          "finishedCard",
          "readAgainCard",
        ],
      },
    },
  },
};

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "defaultCard",
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  time: "13",
  reads: "5k",
  imageSrc: "1",
};
