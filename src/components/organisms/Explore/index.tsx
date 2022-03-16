import Grid from "@mui/material/Grid";
import TypographyText from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import { theme } from "../../../themes";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const axios = require("axios").default;

const useStyles = makeStyles({
  hoverElement: {
    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
  },
});

interface IExploreItems {
  [key: string]: string[][];
}

type ExploreProps = {
  sx?: Object;
};

const Explore: React.FC<ExploreProps> = (props) => {
  const styleClasses = useStyles();
  const [exploreItems, setExploreItems] = React.useState<IExploreItems>({});

  React.useEffect(() => {
    let cancel = false;

    axios.get("http://localhost:3000/ExploreItems").then((response: any) => {
      if (cancel) return;
      setExploreItems(response.data);
    });

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div
      className="explore-container"
      style={{
        backgroundColor: theme.palette.backgroundcolor.main,
        display: "grid",
        justifyContent: "space-around",
        width: "100%",
        ...props.sx,
      }}
    >
      <div
        className="explore-wrapper"
        style={{ width: "900px", paddingBottom: "20px" }}
      >
        <div
          className="explore-category"
          style={{ padding: "5px", margin: "10px" }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <TypographyText
                component="div"
                variant="body1"
                color={theme.palette.textcolor.light}
              >
                Explore by category
              </TypographyText>
            </Grid>
            <Grid item xs={4}>
              <TypographyText
                component="div"
                variant="body1"
                color={theme.palette.textcolor.light}
              >
                See recently added titles
              </TypographyText>
            </Grid>
            <Grid item xs={4}>
              <TypographyText
                component="div"
                variant="body1"
                color={theme.palette.textcolor.light}
              >
                See popular titles
              </TypographyText>
            </Grid>
          </Grid>
        </div>
        <hr />
        <div className="explore-items-container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {exploreItems ? (
              Object.keys(exploreItems).map((category: string) => (
                <Grid item xs={4} key={category}>
                  <div className="item-container">
                    <Grid
                      direction="column"
                      container
                      spacing={{ xs: 2, md: 3 }}
                    >
                      {exploreItems[category].map((item: string[]) => (
                        <Grid
                          data-testid="explore-item"
                          item
                          xs={4}
                          key={item[0]}
                        >
                          <Link
                            to={`/${item[1]}`}
                            style={{ textDecoration: "none" }}
                          >
                            <div style={{ display: "flex", padding: "5px" }}>
                              <Icon
                                className={styleClasses.hoverElement}
                                url={`/res/icons/${item[1]}.png`}
                                sx={{ height: "20px", width: "20px" }}
                              />
                              <TypographyText
                                className={styleClasses.hoverElement}
                                component="div"
                                variant="body2"
                                color={theme.palette.textcolor.light}
                              >
                                {item[0]}
                              </TypographyText>
                            </div>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Grid>
              ))
            ) : (
              <div>Data is loading</div>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Explore;
