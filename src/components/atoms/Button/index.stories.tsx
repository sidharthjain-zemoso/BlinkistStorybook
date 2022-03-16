import CustomButton from "./index";
import { ComponentStory } from "@storybook/react";
import Icon from "../Icon";
import AddIcon from "@mui/icons-material/Add";
import TypographyText from "../Typography";

export default {
  title: "Atoms/Button",
  component: CustomButton,
  argTypes: { onClick: { action: "clicked" } },
};

const addIcon = <AddIcon />;
const arrowIcon = <Icon url="/res/icons/up-arrow.png" />;

export const AddToLibrary: ComponentStory<typeof CustomButton> = () => (
  <div style={{ width: 300 }}>
    <CustomButton
      startIcon={addIcon}
      className="addToLib"
      size="large"
      variant="outlined"
    >
      Add To Library
    </CustomButton>
  </div>
);

export const ExploreBtn: ComponentStory<typeof CustomButton> = () => (
  <CustomButton
    className="explore"
    size="large"
    variant="text"
    endIcon={arrowIcon}
  >
    Explore
  </CustomButton>
);

export const ReadNow: ComponentStory<typeof CustomButton> = () => (
  <CustomButton className="readNow" variant="outlined" color="primary">
    <TypographyText variant="body1" component="div">
      Read now
    </TypographyText>
  </CustomButton>
);

export const FinishedReading: ComponentStory<typeof CustomButton> = () => (
  <CustomButton variant="contained" color="primary">
    <TypographyText variant="body1" component="div">
      Finished Reading
    </TypographyText>
  </CustomButton>
);
