import { Grid } from "@mui/material";
import React from "react";
import { theme } from "../../../themes";
import TypographyText from "../../atoms/Typography";

interface IfooterNavItems {
  [key: string]: string[];
}

type NavSectionProps = {
  footerNavItems: string; //IfooterNavItems;
};

const NavSection: React.FC<NavSectionProps> = (props) => {
  const { footerNavItems, ...rest } = props;
  const navItems: IfooterNavItems = JSON.parse(footerNavItems);
  return (
    <Grid data-testid="nav-section-id" container direction="row" {...rest}>
      {Object.keys(navItems).map((item) => (
        <Grid item key={item} sx={{ marginLeft: 5 }}>
          <ul style={{ listStyleType: "none" }}>
            <li data-testid="nav-section-category-id">
              <TypographyText
                variant="body1"
                component="div"
                color={theme.palette.textcolor.main}
              >
                <b>{item}</b>
              </TypographyText>
            </li>
            {navItems[item].map((link) => (
              <li
                data-testid="nav-section-item-id"
                key={link}
                style={{ padding: 2 }}
              >
                <TypographyText
                  variant="body2"
                  component="div"
                  color={theme.palette.textcolor.light}
                >
                  {link}
                </TypographyText>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavSection;
