import { Backdrop, Box, Container, IconButton, Toolbar } from "@mui/material";
import TypographyText from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Logo from "../../atoms/Logo";
import CustomButton from "../../atoms/Button";
import AvatarWithIcon from "../../molecules/AvatarWithIcon";
import { theme } from "../../../themes";
import Explore from "../Explore";
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  headerContainer: {
    minHeight: 60,
    marginLeft: "13%",
  },
  headerWrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    gap: 25,
  },
  headerHolder: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
  hoverElement: {
    "&:hover": {
      backgroundColor: "none",
      borderBottom: "2px solid #2ce080",
    },
  },
});

type HeaderProps = {
  sx?: Object;
};

const Header: React.FC<HeaderProps> = ({ sx, ...rest }) => {
  const styleClasses = useStyles();

  const [exploreIcon, setExploreIcon] = React.useState(
    <Icon url="/res/icons/down-arrow.png" />
  );
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setExploreIcon(<Icon url="/res/icons/down-arrow.png" />);
  };
  const handleToggle = () => {
    open
      ? setExploreIcon(<Icon url="/res/icons/down-arrow.png" />)
      : setExploreIcon(<Icon url="/res/icons/up-arrow.png" />);
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const avatarMenuOpen = Boolean(anchorEl);
  const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
      data-testid="header-organism-id"
      position="static"
      color="transparent"
      className={styleClasses.headerContainer}
      elevation={0}
      sx={{ width: "80%", ...sx }}
    >
      <Container>
        <Toolbar disableGutters>
          <Backdrop
            sx={{ color: "#fff", zIndex: 2, top: 80, width: "100%" }}
            open={open}
            onClick={handleClose}
          >
            <Explore sx={{ position: "absolute", top: 0 }} />
          </Backdrop>

          <Box className={styleClasses.headerHolder}>
            <Box className={styleClasses.headerWrapper}>
              <Logo id="blinkist-logo" url="/res/logo/Blinklist.png" />
              <Icon url="/res/icons/search.png" />
              <CustomButton
                className="explore"
                size="large"
                variant="text"
                endIcon={exploreIcon}
                onclick={handleToggle}
              >
                <TypographyText
                  variant="body1"
                  component="div"
                  color={theme.palette.textcolor.main}
                >
                  Explore
                </TypographyText>
              </CustomButton>

              <TypographyText
                variant="body1"
                component="div"
                color={theme.palette.textcolor.main}
                sx={{ marginLeft: "2%", minWidth: 100 }}
              >
                My Library
              </TypographyText>
            </Box>

            <Box>
              <IconButton
                id="basic-button"
                aria-controls={avatarMenuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={avatarMenuOpen ? "true" : undefined}
                onClick={handleAvatarClick}
              >
                <AvatarWithIcon>A</AvatarWithIcon>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
