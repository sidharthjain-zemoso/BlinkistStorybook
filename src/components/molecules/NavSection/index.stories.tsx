import { ComponentStory } from "@storybook/react";
import NavSection from "./index";

interface IfooterNavItems {
  [key: string]: string[];
}

const footerNavItems: IfooterNavItems = {
  Editorial: [
    "Book lists",
    "What is NonFiction",
    "What to read next?",
    "Benefits of reading",
  ],
  "Useful links": [
    "Pricing",
    "Blinkist business",
    "Gift cards",
    "Blinkist magazine",
    "Contact & help",
  ],
  Company: ["About", "Careers", "Partners", "Code of Conduct"],
};

export default {
  title: "Molecules/Nav Section",
  component: NavSection,
};

const Template: ComponentStory<typeof NavSection> = (args) => (
  <NavSection {...args} />
);

export const navSection = Template.bind({});
navSection.args = {
  footerNavItems: JSON.stringify(footerNavItems),
};
