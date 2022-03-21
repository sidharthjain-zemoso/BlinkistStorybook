import { render, screen } from "@testing-library/react";
import Banner from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

test("renders a banner", () => {
  render(
    <ThemeProvider theme={theme}>
      <Banner />
    </ThemeProvider>
  );

  const bannerHeading = screen.getByText("Explore Books on entrepreneurship");
  const bannerText = screen.getByText(
    "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
  );
  const bannerImage = screen.getByRole("img");
  expect(bannerHeading).toBeInTheDocument();
  expect(bannerText).toBeInTheDocument();
  expect(bannerImage).toBeInTheDocument();

  const banner = screen.getAllByTestId("banner-id");
  expect(banner).toMatchSnapshot();
});
