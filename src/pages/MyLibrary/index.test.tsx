import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import MyLibrary from "./";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../themes";

const MockMyLibrary = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MyLibrary />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("My Library Page", () => {
  test("should contain header", () => {
    render(<MockMyLibrary />);
    const header = screen.getByTestId("header-organism-id");
    expect(header).toBeInTheDocument();
  });

  test("should contain My Library heading", () => {
    render(<MockMyLibrary />);
    const heading = screen.getByRole("heading", {
      name: "My Library",
    });
    expect(heading).toBeInTheDocument();
  });
  test("should contain Tabs", () => {
    render(<MockMyLibrary />);
    const tabs = screen.getByTestId("tabs-id");
    expect(tabs).toBeInTheDocument();
  });

  test("should contain library cards", async () => {
    render(<MockMyLibrary />);
    const libraryCards = screen.getByTestId("library-cards");
    const cards = await screen.findAllByTestId("book-card-id");
    expect(cards.length).toBe(4);
    expect(libraryCards).toBeInTheDocument();
  });

  test("should contain finsished reading cards", async () => {
    render(<MockMyLibrary />);
    const finishedReadingTab = screen.getByText(/Finished Reading/i);
    fireEvent.click(finishedReadingTab);
    const finishedReadingCards = screen.getByTestId("finished-reading-cards");

    const cards = await screen.findAllByTestId("book-card-id");
    expect(cards.length).toBe(3);
    expect(finishedReadingCards).toBeInTheDocument();
  });

  test("should contain footer", () => {
    render(<MockMyLibrary />);
    const footer = screen.getByTestId("footer-organism-id");
    expect(footer).toBeInTheDocument();
  });
});
