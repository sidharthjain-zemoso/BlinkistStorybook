import { render, screen } from "@testing-library/react";
import ProgressBar from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

describe("Progress Bar", () => {
  it("renders a progress bar component", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProgressBar progress={30} />
      </ThemeProvider>
    );

    const progressBarElement = screen.getByTestId("progress-bar-id");
    expect(progressBarElement).toBeDefined();
    expect(progressBarElement).toMatchSnapshot();
  });
});
