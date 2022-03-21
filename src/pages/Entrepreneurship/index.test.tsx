import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Entrepreneurship from "./";
import { BrowserRouter, Router } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../themes";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { debug } from "console";

const MockEntrepreneurship = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Entrepreneurship />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("Entrepreneurship Page", () => {
  test("should contain header", () => {
    render(<MockEntrepreneurship />);
    const header = screen.getByTestId("header-organism-id");
    expect(header).toBeInTheDocument();
  });

  test("should contain Card Banner", () => {
    render(<MockEntrepreneurship />);
    const banner = screen.getByTestId("banner-id");
    expect(banner).toBeInTheDocument();
  });
  test("should contain Search Bar", () => {
    render(<MockEntrepreneurship />);
    const searchBar = screen.getByPlaceholderText(/Search by title or author/i);
    expect(searchBar).toBeInTheDocument();
  });

  // more testing on search
  test("should correctly perform search operation", async () => {
    render(<MockEntrepreneurship />);
    const searchBar = screen.getByPlaceholderText(/Search by title or author/i);
    fireEvent.change(searchBar, { target: { value: "Erica" } });
    const bookAuthor = await screen.findByText(/Erica Keswin/i);
    const bookTitle = await screen.findByText(/Bring Your Human to Work/i);
    expect(bookAuthor).toBeInTheDocument();
    expect(bookTitle).toBeInTheDocument();
  });

  test("should contain trending blinks", () => {
    render(<MockEntrepreneurship />);
    const trendingBlinksHeading = screen.getByText(/Trending Blinks/i);
    const trendingBlinks = screen.getByTestId("trending-blinks-id");
    expect(trendingBlinksHeading).toBeInTheDocument();
    expect(trendingBlinks).toBeInTheDocument();
  });

  test("should contain just added blinks", () => {
    render(<MockEntrepreneurship />);
    const justAddedHeading = screen.getByText(/Just added/i);
    const justAdded = screen.getByTestId("just-added-blinks-id");
    expect(justAddedHeading).toBeInTheDocument();
    expect(justAdded).toBeInTheDocument();
  });

  test("should contain featured audio blinks", () => {
    render(<MockEntrepreneurship />);
    const featuredAudioBlinksHeading = screen.getByText(
      /Featured audio Blinks/i
    );
    const featuredAudioBlinks = screen.getByTestId("featured-audio-blinks-id");
    expect(featuredAudioBlinksHeading).toBeInTheDocument();
    expect(featuredAudioBlinks).toBeInTheDocument();
  });

  // more testing on add to library button of cards
  // test("should navigate to BookDetailView onClicking addToLibrary button", async () => {
  //   render(<MockEntrepreneurship />);
  //   const addToLibButtons = await screen.findAllByRole("button", {
  //     name: "Add To Library",
  //   });
  //   await act(async () => {
  //     userEvent.click(addToLibButtons[0]);
  //   }).then(() => {
  //     const featuredAudioBlinks = screen.getByTestId(
  //       "featured-audio-blinks-id"
  //     );
  //     expect(featuredAudioBlinks).toBeInTheDocument();
  //   });
  //   debug();
  // });

  test("should contain footer", () => {
    render(<MockEntrepreneurship />);
    const footer = screen.getByTestId("footer-organism-id");
    expect(footer).toBeInTheDocument();
  });
});
