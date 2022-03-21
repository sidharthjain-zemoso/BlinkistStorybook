import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import MyLibraryTemplate from "./";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../../themes";

const DummyView = () => <div>Dummy View</div>;

const MockTemplate = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MyLibraryTemplate
          header={<DummyView />}
          heading={<DummyView />}
          tabs={<DummyView />}
          footer={<DummyView />}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("MyLibrary Template", () => {
  it("Render MyLibrary Template", () => {
    render(<MockTemplate />);
    const template = screen.getByTestId("my-library-template-id");
    expect(template).toBeDefined();
    expect(template).toMatchSnapshot();
  });
});
