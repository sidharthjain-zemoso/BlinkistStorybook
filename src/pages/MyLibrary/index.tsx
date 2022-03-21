import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import TypographyText from "../../components/atoms/Typography";
import CustomTabs from "../../components/molecules/Tabs";
import BookCard from "../../components/organisms/BookCard";
import React from "react";
import MyLibraryTemplate from "../../components/templates/MyLibrary";
import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";

const useStyles = makeStyles({
  bookCardStyles: {
    "&:hover": {
      backgroundColor: theme.palette.backgroundcolor.main,
      cursor: "pointer",
    },
  },
});

const axios = require("axios");

type MyLibraryProps = {};

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

const MyLibrary: React.FC<MyLibraryProps> = (props) => {
  const styleClasses = useStyles();
  const [cardsInfo, setCardsInfo] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    let cancelStateUpdateOnUnmount = false;
    axios.get("http://localhost:3000/cardsInfo").then((response: any) => {
      if (cancelStateUpdateOnUnmount) return;
      setCardsInfo(response.data);
    });
    return () => {
      cancelStateUpdateOnUnmount = true;
    };
  }, []);

  return (
    <MyLibraryTemplate
      header={<Header />}
      heading={
        <TypographyText variant="heading" component="h1">
          My Library
        </TypographyText>
      }
      tabs={
        <CustomTabs
          tabWidth={360}
          labels={["Currently Reading", "Finished Reading"]}
          contents={[
            <div
              data-testid="library-cards"
              className="cards-container"
              style={{ display: "flex", flexWrap: "wrap", gap: 25 }}
            >
              {cardsInfo.map((cardData: ICard) => {
                return cardData.isAddedToLib && !cardData.isFinishedReading ? (
                  <BookCard
                    className={styleClasses.bookCardStyles}
                    variant="defaultCard"
                    key={cardData.id}
                    {...cardData}
                  />
                ) : null;
              })}
            </div>,

            <div
              data-testid="finished-reading-cards"
              className="cards-container"
              style={{ display: "flex", flexWrap: "wrap", gap: 25 }}
            >
              {cardsInfo.map((cardData: ICard) => {
                return cardData.isAddedToLib && cardData.isFinishedReading ? (
                  <BookCard
                    className={styleClasses.bookCardStyles}
                    variant="readAgainCard"
                    key={cardData.id}
                    {...cardData}
                  />
                ) : null;
              })}
            </div>,
          ]}
        />
      }
      footer={<Footer />}
    />
  );
};

export default MyLibrary;
