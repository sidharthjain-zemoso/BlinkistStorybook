import { fireEvent, render, screen } from "@testing-library/react";
import CustomTabs from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

const Tab1: React.FC<{}> = () => <div>Content1</div>;
const Tab2: React.FC<{}> = () => <div>Content2</div>;

describe("tabs", () => {
  it("renders a custom tab component with two tabs", () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomTabs
          labels={["Tab1", "Tab2"]}
          contents={[<Tab1 />, <Tab2 />]}
          tabWidth={200}
        />
      </ThemeProvider>
    );

    const tabs = screen.getByTestId("tabs-id");
    const tab1 = screen.getByText("Tab1");
    const tab2 = screen.getByText("Tab2");

    const tab1Content = screen.getByText(/content1/i);

    expect(tab1).toBeDefined();
    expect(tab2).toBeDefined();

    expect(tab1Content).toBeDefined();
  });

  it("tests onclick tab2", () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomTabs
          labels={["Tab1", "Tab2"]}
          contents={[<Tab1 />, <Tab2 />]}
          tabWidth={200}
        />
      </ThemeProvider>
    );
    const tab1 = screen.getByText("Tab1");
    const tab2 = screen.getByText("Tab2");

    fireEvent.click(tab2);

    const tab2Content = screen.getByText(/content2/i);

    expect(tab1).toBeDefined();
    expect(tab2).toBeDefined();
    expect(tab2Content).toBeInTheDocument();
  });
});
