import { render, screen } from "@testing-library/react";
import TypographyText from ".";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

test("renders a typography component", () => {
  render(
    <ThemeProvider theme={theme}>
      <TypographyText component="div">some text</TypographyText>
    </ThemeProvider>
  );

  const textElement = screen.getByText("some text");
  expect(textElement).toMatchSnapshot();
});
