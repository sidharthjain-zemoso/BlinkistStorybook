import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from "./index";

export default {
  title: "Atoms/Progress Bar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <div style={{ width: 300 }}>
    <ProgressBar {...args} />
  </div>
);

export const progressBar: ComponentStory<typeof ProgressBar> = Template.bind(
  {}
);
progressBar.args = {
  progress: 30,
};
