import TypographyText from "../../atoms/Typography";
import { theme } from "../../../themes";
import Logo from "../../atoms/Logo";
import NavSection from "../../molecules/NavSection";
import React from "react";
import { Box, Grid } from "@mui/material";

const axios = require("axios").default;

interface IfooterNavItems {
  [key: string]: string[];
}

type FooterProps = {
  sx?: Object;
};

const Footer: React.FC<FooterProps> = ({ sx, ...rest }) => {
  const [footerNavItems, setFooterNavItems] = React.useState<IfooterNavItems>(
    {}
  );
  React.useEffect(() => {
    let cancel = false;
    axios
      .get(
        "https://my-json-server.typicode.com/sidharthjain-zemoso/blinkist/footerNavItems"
      )
      .then((response: any) => {
        if (cancel) return;
        setFooterNavItems(response.data);
      });
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <Box
      data-testid="footer-organism-id"
      sx={{
        backgroundColor: theme.palette.backgroundcolor.main,
        padding: 5,
        ...sx,
      }}
    >
      <Grid container direction="column" sx={{ marginLeft: "13%" }}>
        <Grid item>
          <Grid container direction="row">
            <Grid item xs={4} sx={{ marginTop: 5 }}>
              <Grid container direction="column" rowSpacing={4}>
                <Grid item>
                  <Logo url="/res/logo/Blinklist.png" />
                </Grid>
                <Grid item>
                  <TypographyText
                    component="div"
                    variant="subtitle1"
                    color="secondary"
                  >
                    Big ideas in small packages. Start learning now
                  </TypographyText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <NavSection footerNavItems={JSON.stringify(footerNavItems)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TypographyText
            component="div"
            variant="caption1"
            color={theme.palette.textcolor.light}
          >
            &copy; Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </TypographyText>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
