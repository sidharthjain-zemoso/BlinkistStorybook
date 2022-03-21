import { render, screen } from "@testing-library/react";
import EntrepreneurshipTemplate from "./";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../../themes";

const DummyView = () => <div>Dummy View</div>;

const booksInfo = [
  {
    id: 0,
    isFinishedReading: true,
    isAddedToLib: true,
    category: "TrendingBlinks",
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13",
    reads: "",
    imageSrc: "1",
  },
];

const MockTemplate = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <EntrepreneurshipTemplate
          header={<DummyView />}
          footer={<DummyView />}
          searchBar={<DummyView />}
          cardBanner={<DummyView />}
          blinks={booksInfo}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("MyLibrary Template", () => {
  it("Render MyLibrary Template", () => {
    render(<MockTemplate />);
    const template = screen.getByTestId("entrepreneurship-template-id");
    expect(template).toBeDefined();
    expect(template).toMatchSnapshot();
  });
});
