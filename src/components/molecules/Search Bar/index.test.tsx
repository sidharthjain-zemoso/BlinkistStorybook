import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

describe("Search Bar", () => {
  test("renders a SearchBar", () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    );

    const searchBar = screen.getByPlaceholderText(/Search by title or author/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toMatchSnapshot();
  });

  test("should be able to type in input", () => {
    render(<SearchBar />);
    const searchBar: any = screen.getByPlaceholderText(
      /Search by title or author/i
    );
    fireEvent.change(searchBar, { target: { value: "Erica" } });
    expect(searchBar.value).toBe("Erica");
  });
});
