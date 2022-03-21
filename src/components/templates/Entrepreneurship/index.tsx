import { useAuth0 } from "@auth0/auth0-react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../themes";
import TypographyText from "../../atoms/Typography";
import BookCard from "../../organisms/BookCard";

const useStyles = makeStyles({
  bookCardStyles: {
    "&:hover": {
      backgroundColor: theme.palette.backgroundcolor.main,
      cursor: "pointer",
    },
  },
});

interface ICard {
  id: number;
  title: string;
  category: string;
  author: string;
  time: string;
  reads: string;
  imageSrc: string;
  isAddedToLib: boolean;
  isFinishedReading: boolean;
}

type EntrepreneurshipTemplateProps = {
  header: ReactElement<any>;
  footer: ReactElement<any>;
  cardBanner: ReactElement<any>;
  searchBar: ReactElement<any>;
  blinks: ICard[];
};

const EntrepreneurshipTemplate: React.FC<EntrepreneurshipTemplateProps> = (
  props
) => {
  const { isAuthenticated } = useAuth0();
  const styleClasses = useStyles();
  const navigate = useNavigate();
  const handleClick = async (data: ICard) => {
    if (isAuthenticated) {
      if (!data.isAddedToLib) {
        await axios
          .patch(`http://localhost:3000/cardsInfo/${data.id}`, {
            isAddedToLib: true,
          })
          .then((response: any) => {
            let path = `/book/${data.id}`;
            navigate(path);
          });
      } else {
        let path = `/book/${data.id}`;
        navigate(path);
      }
    } else {
      let path = "/";
      navigate(path);
    }
  };

  const renderBlinks = (category: string) => {
    return props.blinks.map((cardData: ICard) => {
      return cardData.category === category ? (
        <BookCard
          className={styleClasses.bookCardStyles}
          buttonOnClick={() => handleClick(cardData)}
          variant="addToLibCard"
          key={cardData.id}
          {...cardData}
        />
      ) : null;
    });
  };

  return (
    <div
      data-testid="entrepreneurship-template-id"
      className="entrepreneurship-container"
    >
      {props.header}
      <Box sx={{ marginBottom: 5, marginTop: 10, marginLeft: "14%" }}>
        <Box sx={{ width: "90%" }}>
          <Grid container direction="column" spacing={10}>
            <Grid item width={"95%"}>
              {props.cardBanner}
            </Grid>
            <Grid item width={700}>
              {props.searchBar}
            </Grid>
            <Grid item>
              <TypographyText
                component="div"
                variant="heading3"
                sx={{ marginBottom: 15 }}
              >
                Trending Blinks
              </TypographyText>
              <Box
                data-testid="trending-blinks-id"
                display="flex"
                flexWrap="wrap"
                gap={5}
              >
                {renderBlinks("TrendingBlinks")}
              </Box>
            </Grid>
            <Grid item>
              <TypographyText
                component="div"
                variant="heading3"
                sx={{ marginBottom: 15 }}
              >
                Just added
              </TypographyText>
              <Box
                data-testid="just-added-blinks-id"
                display="flex"
                flexWrap="wrap"
                gap={5}
              >
                {renderBlinks("JustAddedBlinks")}
              </Box>
            </Grid>
            <Grid item>
              <TypographyText
                component="div"
                variant="heading3"
                sx={{ marginBottom: 15 }}
              >
                Featured audio Blinks
              </TypographyText>
              <Box
                data-testid="featured-audio-blinks-id"
                display="flex"
                flexWrap="wrap"
                gap={5}
              >
                {renderBlinks("AudioBlinks")}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {props.footer}
    </div>
  );
};

export default EntrepreneurshipTemplate;
