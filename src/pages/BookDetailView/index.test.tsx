import {
  render,
  screen,
  fireEvent,
  getByTestId,
  act,
} from "@testing-library/react";
import BookDetailView from "./";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../themes";
import userEvent from "@testing-library/user-event";

const MockBookDetailView = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BookDetailView />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("BookDetailView Page", () => {
  test("should contain header", () => {
    render(<MockBookDetailView />);
    const header = screen.getByTestId("header-organism-id");
    expect(header).toBeInTheDocument();
  });

  test("renders book details", () => {
    render(<MockBookDetailView />);
    const bookDetails = screen.getByTestId("book-details-id");
    expect(bookDetails).toBeInTheDocument();
  });

  //   test("should contain book details", () => {
  //     const readNowButton = screen.getByRole("button", { : "Read now" });
  //     //   const finishedReadingButton = screen.getByRole("button", {
  //     //     name: "Finished Reading",
  //     //   });
  //     //   const sendToKindleButton = screen.getByRole("button", {
  //     //     name: "Send to Kindle",
  //     //   });

  //     expect(readNowButton).toBeInTheDocument();
  //     //   expect(finishedReadingButton).toBeInTheDocument();
  //     //   expect(sendToKindleButton).toBeInTheDocument();
  //   });

  // test("should navigate to MyLibrary onClicking Finished Reading button", async () => {
  //   // const history: any = createMemoryHistory();
  //   // history.push('/book/0')
  //   render(<MockBookDetailView />);
  //   await act(async () => {
  //     const finishedReadingButton = await screen.findByRole("button", {
  //       name: "Finished Reading",
  //     });
  //     expect(finishedReadingButton).toBeInTheDocument();
  //     // const leftClick = { button: 0 };
  //     userEvent.click(finishedReadingButton);
  //   }).then(() => {
  //     const textFromBookDetailViewPage = screen.getByText(
  //       /Get the key ideas from/i
  //     );
  //     expect(textFromBookDetailViewPage).toBeInTheDocument();
  //     // const textFromMyLibraryPage = screen.getByText(/Currently Reading/i);
  //     // expect(textFromMyLibraryPage).toBeInTheDocument();
  //   });
  // });

  test("should contain Tabs", () => {
    render(<MockBookDetailView />);
    const tabs = screen.getByTestId("tabs-id");
    const synopsisLabel = screen.getByText(/Synopsis/i);
    const whoIsItForLabel = screen.getByText(/Who is it for\?/i);
    const aboutTheAuthorLabel = screen.getByText(/About The author/i);
    const firstTabContent = screen.getByText(
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier's essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today's business world."
    );
    expect(firstTabContent).toBeInTheDocument();

    expect(synopsisLabel).toBeInTheDocument();
    expect(whoIsItForLabel).toBeInTheDocument();
    expect(aboutTheAuthorLabel).toBeInTheDocument();
    expect(tabs).toBeInTheDocument();
  });

  test("should contain footer", () => {
    render(<MockBookDetailView />);
    const footer = screen.getByTestId("footer-organism-id");
    expect(footer).toBeInTheDocument();
  });
});
