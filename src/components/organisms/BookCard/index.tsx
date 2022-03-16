import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TypographyText from "../../atoms/Typography";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../../../themes";
import Icon from "../../atoms/Icon";
import CustomButton from "../../atoms/Button";
import { makeStyles } from "@mui/styles";
import ProgressBar from "../../atoms/ProgressBar";

const useStyles = makeStyles({
  cardContainer: {
    border: "1px solid #E1ECFC",
    borderRadius: "8px",
  },
  cardContentWrapperELement: {
    maxWidth: "350px",
    padding: "5px",
    marginTop: "1.5px",
  },
  readElement: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface BookCardProps {
  variant: "defaultCard" | "addToLibCard" | "finishedCard" | "readAgainCard";
  title: string;
  author: string;
  time: string;
  reads?: string;
  imageSrc: string;
  className?: string;
  buttonOnClick?: React.MouseEventHandler<HTMLElement>;
}

export function BookCard(props: BookCardProps) {
  const styleClasses = useStyles();
  const {
    variant,
    className,
    buttonOnClick,
    title,
    author,
    time,
    reads,
    imageSrc,
  } = props;
  return (
    <Card
      data-testid="book-card-id"
      className={`${className} ${styleClasses.cardContainer}`}
      sx={{ maxWidth: 345, height: 550 }}
    >
      <CardMedia
        component="img"
        height="350"
        image={`/res/cover images/${imageSrc}.png`}
        alt="Book Cover"
      />
      <CardContent>
        <div className="card-content-wrapper">
          <div className={styleClasses.cardContentWrapperELement}>
            <TypographyText
              variant="subtitle1"
              component="div"
              color={theme.palette.textcolor.main}
            >
              {title}
            </TypographyText>
          </div>
          <div className={styleClasses.cardContentWrapperELement}>
            <TypographyText
              variant="body1"
              component="div"
              color={theme.palette.textcolor.light}
            >
              {author}
            </TypographyText>
          </div>
          <div
            className={`${styleClasses.readElement} ${styleClasses.cardContentWrapperELement}`}
          >
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
                {time}-minute read
              </TypographyText>
            </div>
            {reads ? (
              <div
                className="read-num"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon url="/res/icons/user.png" />
                <TypographyText
                  component="div"
                  variant="caption3"
                  color={theme.palette.textcolor.light}
                >
                  {reads} reads
                </TypographyText>
              </div>
            ) : (
              ""
            )}
          </div>
          {variant === "defaultCard" ? (
            <div className={styleClasses.cardContentWrapperELement}>
              <Icon
                url="/res/icons/more.png"
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  marginTop: "10px",
                }}
              />
            </div>
          ) : variant === "finishedCard" || variant === "readAgainCard" ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <TypographyText variant="body1" component="div" color="secondary">
                {variant === "finishedCard" ? "Finished" : "Read Again"}
              </TypographyText>
            </div>
          ) : (
            ""
          )}
        </div>
      </CardContent>
      {variant === "defaultCard" ||
      variant === "finishedCard" ||
      variant === "readAgainCard" ? (
        <ProgressBar
          sx={{ marginTop: variant === "defaultCard" ? "20px" : "6px" }}
          progress={variant === "readAgainCard" ? 100 : 30}
        />
      ) : variant === "addToLibCard" ? (
        <CustomButton
          id="cardButtonId"
          startIcon={<AddIcon />}
          className="addToLib"
          size="large"
          variant="outlined"
          sx={{ width: "100%", marginTop: "10px" }}
          onclick={buttonOnClick}
        >
          <TypographyText variant="body1" component="div">
            Add To Library
          </TypographyText>
        </CustomButton>
      ) : (
        ""
      )}
    </Card>
  );
}

export default BookCard;
