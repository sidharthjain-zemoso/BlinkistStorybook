import { makeStyles } from "@mui/styles";
import { Backdrop, Box, Grid } from "@mui/material";
import TypographyText from "../../components/atoms/Typography";
import CustomButton from "../../components/atoms/Button";
import Logo from "../../components/atoms/Logo";
import { theme } from "../../themes";
import { useAuth0 } from "@auth0/auth0-react";
import Icon from "../../components/atoms/Icon";
import React from "react";
import Explore from "../../components/organisms/Explore";
import Header from "../../components/organisms/Header";

const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.backgroundcolor.main,
    height: "110vh",
  },
  contentWrapper: {
    // width: "100vh",
    // display: "grid",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    paddingTop: 10,
    display: "flex",
    marginLeft: "15%",
    marginRight: "20%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContentWrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    gap: 40,
  },
});

const Login = () => {
  const styleClasses = useStyles();

  return (
    <Grid
      className={styleClasses.container}
      container
      direction="column"
      spacing={20}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid
        className={styleClasses.contentWrapper}
        item
        container
        direction="column"
        spacing={10}
      >
        <Grid item>
          <TypographyText
            color={theme.palette.secondary.main}
            variant="heading"
            component="h1"
          >
            Fit Reading into your life
          </TypographyText>
        </Grid>
        <Grid item>
          <TypographyText variant="subtitle1" component="p">
            Key takeaways from the world's best nonfiction books in text and
            audio
          </TypographyText>
        </Grid>
        <Grid item>
          <Logo url="https://mir-s3-cdn-cf.behance.net/projects/404/ac0ae294183593.Y3JvcCw5MzAsNzI4LDEzMyww.png" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
