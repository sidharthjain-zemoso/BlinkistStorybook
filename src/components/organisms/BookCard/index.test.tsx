import { fireEvent, render, screen } from "@testing-library/react";
import BookCard from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

describe("Book Card", () => {
  test("renders a default BookCard", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard
          variant="defaultCard"
          title="Bring Your Human to Work"
          author="Erica Keswin"
          time="13"
          reads="5k"
          imageSrc="1"
        />
      </ThemeProvider>
    );

    const bookCard = screen.getByTestId("book-card-id");
    const authorElement = screen.getByText(/bring your human to work/i);
    const titleElement = screen.getByText(/erica keswin/i);
    // const imageElement = screen.getByRole("img");
    const timeElement = screen.getByText(/13-minute read/i);
    const readsElement = screen.getByText(/5k reads/i);

    expect(authorElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    // expect(imageElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(readsElement).toBeInTheDocument();
    expect(bookCard).toBeInTheDocument();

    expect(bookCard).toMatchSnapshot();
  });

  test("renders a addToLib variant BookCard", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard
          variant="addToLibCard"
          title="Bring Your Human to Work"
          author="Erica Keswin"
          time="13"
          reads="5k"
          imageSrc="1"
        />
      </ThemeProvider>
    );

    const bookCard = screen.getByTestId("book-card-id");
    const authorElement = screen.getByText(/bring your human to work/i);
    const titleElement = screen.getByText(/erica keswin/i);
    // const imageElement = screen.getByRole("img");
    const timeElement = screen.getByText(/13-minute read/i);
    const readsElement = screen.getByText(/5k reads/i);
    const addToLibButton = screen.getByRole("button", {
      name: "Add To Library",
    });

    expect(authorElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    // expect(imageElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(readsElement).toBeInTheDocument();
    expect(addToLibButton).toBeInTheDocument();
    expect(bookCard).toBeInTheDocument();

    expect(bookCard).toMatchSnapshot();
  });
});
