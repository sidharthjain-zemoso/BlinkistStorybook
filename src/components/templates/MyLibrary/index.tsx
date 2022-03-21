import React, { ReactElement } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Grid } from "@mui/material";

const useStyles = makeStyles({
  contentContainer: {
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "14%",
  },
});

type MyLibraryTemplateProps = {
  header: ReactElement<any>;
  footer: ReactElement<any>;
  tabs: ReactElement<any>;
  heading: ReactElement<any>;
  sx?: Object;
};

const MyLibraryTemplate: React.FC<MyLibraryTemplateProps> = (props) => {
  const styleClasses = useStyles();
  return (
    <div
      data-testid="my-library-template-id"
      className="my-library-template-container"
      style={props.sx}
    >
      <div className="container">
        {props.header}
        <Box className={styleClasses.contentContainer}>
          <Grid container direction="column" spacing={5}>
            <Grid item>{props.heading}</Grid>
            <Grid item>{props.tabs}</Grid>
          </Grid>
        </Box>
        {props.footer}
      </div>
    </div>
  );
};

export default MyLibraryTemplate;
