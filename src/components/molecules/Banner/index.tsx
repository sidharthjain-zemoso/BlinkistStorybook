import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../atoms/Logo";
import TypographyText from "../../atoms/Typography";
import { theme } from "../../../themes";

type CardBannerProps = {
  sx?: Object;
};

const CardBanner: React.FC<CardBannerProps> = (props) => {
  return (
    <div
      data-testid="banner-id"
      className="banner-container"
      style={{
        backgroundColor: theme.palette.backgroundcolor.main,
        width: "100%",
        ...props.sx,
      }}
    >
      <Grid
        container
        // spacing={5}
        columnSpacing={{ xs: 3, sm: 6, md: 9 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item container xs={7} spacing={10}>
          <Grid item>
            <TypographyText variant="heading" component="div">
              Explore Books on entrepreneurship
            </TypographyText>
          </Grid>
          <Grid item>
            <TypographyText
              color={theme.palette.textcolor.light}
              variant="subtitle2"
              component="div"
            >
              Everything you need to know about thriving on a shoestring budget,
              making your first million, and hiring right from the start.
            </TypographyText>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Logo url="/res/logo/reading.png" />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardBanner;
