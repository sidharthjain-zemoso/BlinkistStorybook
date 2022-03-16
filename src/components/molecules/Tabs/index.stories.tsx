import { ComponentStory } from "@storybook/react";
import CustomTabs from "./index";
import TypographyText from "../../atoms/Typography";

export default {
  title: "Molecules/Tabs",
  component: CustomTabs,
  //   argTypes: {
  //     value: {
  //       control: {
  //         type: "radio",
  //         options: ["1", "2"],
  //       },
  //     },
  //   },
};

const Tab1: React.FC<{}> = () => <div>Tab1 content</div>;
const Tab2: React.FC<{}> = () => <div>Tab2 content</div>;

const Template: ComponentStory<typeof CustomTabs> = (args) => (
  <CustomTabs {...args} />
);

export const tabs = Template.bind({});
tabs.args = {
  labels: ["label1", "label2"],
  contents: [<Tab1 />, <Tab2 />],
  tabWidth: 200,
};
