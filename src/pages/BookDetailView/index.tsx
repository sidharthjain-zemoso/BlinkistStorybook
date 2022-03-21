import { Box, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoverImage from "../../components/atoms/BookCoverImage";
import CustomButton from "../../components/atoms/Button";
import Icon from "../../components/atoms/Icon";
import TypographyText from "../../components/atoms/Typography";
import CustomTabs from "../../components/molecules/Tabs";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import { theme } from "../../themes";

type BookDetailViewProps = {};

const BookDetailView: React.FC<BookDetailViewProps> = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const handleClick = () => {
    axios
      .patch(
        `http://localhost:3000/cardsInfo/${id}`,
        { isFinishedReading: true },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response: any) => {
        let path = `/`;
        navigate(path);
      });
  };
  return (
    <div className="book-detail-container">
      <Header />
      <Box sx={{ marginTop: "2%", marginLeft: "14%" }}>
        <Grid
          data-testid="book-details-id"
          container
          direction="column"
          spacing={15}
        >
          <Grid item>
            <TypographyText
              variant="body2"
              component="div"
              color={theme.palette.textcolor.main}
            >
              Get the key ideas from
            </TypographyText>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={70}>
              <Grid item>
                <Grid container direction="column" spacing={20}>
                  <Grid item>
                    <Grid container direction="column" spacing={5}>
                      <Grid item>
                        <TypographyText
                          variant="heading"
                          component="h1"
                          color={theme.palette.textcolor.main}
                        >
                          Beyond Entrepreneurship 2.0
                        </TypographyText>
                      </Grid>
                      <Grid item>
                        <TypographyText
                          variant="subtitle3"
                          component="div"
                          color={theme.palette.textcolor.main}
                        >
                          Turning Your Business into an Enduring Great Company
                        </TypographyText>
                      </Grid>
                      <Grid item>
                        <TypographyText
                          variant="body1"
                          component="div"
                          color={theme.palette.textcolor.light}
                        >
                          By Jim Collins and Bill Lazier
                        </TypographyText>
                      </Grid>
                      <Grid item>
                        <div
                          className="read-time"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Icon url="/res/icons/clock.png" />
                          <TypographyText
                            component="div"
                            variant="caption3"
                            color={theme.palette.textcolor.light}
                          >
                            15-minute read
                          </TypographyText>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" spacing={5}>
                      <Grid item>
                        <CustomButton
                          variant="outlined"
                          size="large"
                          sx={{ borderColor: "black", color: "primary" }}
                        >
                          <TypographyText variant="body1" component="div">
                            Read now
                          </TypographyText>
                        </CustomButton>
                      </Grid>
                      <Grid item>
                        <CustomButton
                          size="large"
                          onclick={handleClick}
                          variant="contained"
                          color="primary"
                        >
                          <TypographyText variant="body1" component="div">
                            Finished Reading
                          </TypographyText>
                        </CustomButton>
                      </Grid>
                      <Grid item>
                        <CustomButton
                          variant="text"
                          size="large"
                          endIcon={<Icon url="/res/icons/right-arrow.png" />}
                        >
                          <TypographyText
                            sx={{ color: theme.palette.textcolor.light }}
                            variant="body1"
                            component="div"
                          >
                            Send to Kindle
                          </TypographyText>
                        </CustomButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <CoverImage url="/res/cover images/1.png" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CustomTabs
              labels={["Synopsis", "Who is it for?", "About the author"]}
              contents={[
                <TypographyText
                  color={theme.palette.textcolor.main}
                  component="div"
                  variant="body2"
                >
                  Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and
                  Bill Lazier's essential 1992 business handbook, Beyond
                  Entrepreneurship for the entrepreneurs, visionaries, and
                  innovators of today. This new edition combines the timeless
                  business advice and strategy of the original text,
                  supplemented with cutting-edge insights and case studies
                  pertinent to today's business world.
                </TypographyText>,
                <>Tab2</>,
                <>Tab3</>,
              ]}
              tabWidth={200}
              sx={{ width: "600px" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default BookDetailView;
