import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyLibraryTemplate from "./index";
import { theme } from "../../../themes";
import TypographyText from "../../atoms/Typography";

export default {
  title: "Templates/My Library Template",
  component: MyLibraryTemplate,
} as ComponentMeta<typeof MyLibraryTemplate>;

const Template: ComponentStory<typeof MyLibraryTemplate> = (args) => (
  <MyLibraryTemplate {...args} />
);

type Props = {
  sx?: Object;
};

const Header: React.FC<Props> = (props) => {
  return (
    <div style={{ height: 80, textAlign: "center", ...props.sx }}>Header</div>
  );
};

const Footer: React.FC<Props> = (props) => {
  return (
    <div
      style={{ height: 300, width: "100%", textAlign: "center", ...props.sx }}
    >
      Footer
    </div>
  );
};

const Card: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        height: 550,
        width: 345,
        textAlign: "center",
        backgroundColor: "GrayText",
        ...props.sx,
      }}
    >
      Card
    </div>
  );
};

const Heading: React.FC<Props> = (props) => {
  return (
    <TypographyText variant="heading" component="div" sx={props.sx}>
      Heading
    </TypographyText>
  );
};

const Tabs: React.FC<Props> = (props) => {
  return <div style={{ height: 48, width: 912, ...props.sx }}>Tabs</div>;
};

export const myLibraryTemplate: ComponentStory<typeof MyLibraryTemplate> =
  Template.bind({});
myLibraryTemplate.args = {
  header: (
    <Header
      sx={{
        backgroundColor: theme.palette.backgroundcolor.main,
      }}
    />
  ),
  heading: <Heading sx={{ marginBottom: "2%" }} />,
  tabs: <Tabs sx={{}} />,
  // cards: [<Card />, <Card />, <Card />],
  footer: (
    <Footer
      sx={{
        backgroundColor: theme.palette.backgroundcolor.main,
      }}
    />
  ),
  sx: {
    backgroundColor: "lightGreen",
  },
};
