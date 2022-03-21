import React from "react";
import SearchBar from "../../components/molecules/Search Bar";
import CardBanner from "../../components/molecules/Banner";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import EntrepreneurshipTemplate from "../../components/templates/Entrepreneurship";
import axios from "axios";

type EntrepreneurshipProps = {};

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

const Entrepreneurship: React.FC<EntrepreneurshipProps> = (props) => {
  const [booksInfo, setBooksInfo] = React.useState<ICard[]>([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    let timer = setTimeout(() => {
      let cancelStateUpdateOnUnmount = false;
      axios
        .get(`http://localhost:3000/cardsInfo?&q=${searchValue}`)
        .then((response: any) => {
          if (cancelStateUpdateOnUnmount) return;
          setBooksInfo(response.data);
        });

      return () => {
        cancelStateUpdateOnUnmount = true;
      };
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  React.useEffect(() => {
    let cancelStateUpdateOnUnmount = false;
    axios.get("http://localhost:3000/cardsInfo").then((response: any) => {
      if (cancelStateUpdateOnUnmount) return;
      setBooksInfo(response.data);
    });
    return () => {
      cancelStateUpdateOnUnmount = true;
    };
  }, []);

  return (
    <EntrepreneurshipTemplate
      header={<Header />}
      footer={<Footer />}
      searchBar={
        <SearchBar
          handleChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
        />
      }
      cardBanner={<CardBanner />}
      blinks={booksInfo}
    />
  );
};

export default Entrepreneurship;
