import { render, screen } from "@testing-library/react";
import NavSection from "./";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../themes";

interface IfooterNavItems {
  [key: string]: string[];
}

const footerNavItems: IfooterNavItems = {
  Editorial: [
    "Book lists",
    "What is NonFiction",
    "What to read next?",
    "Benefits of reading",
  ],
  "Useful links": [
    "Pricing",
    "Blinkist business",
    "Gift cards",
    "Blinkist magazine",
    "Contact & help",
  ],
  Company: ["About", "Careers", "Partners", "Code of Conduct"],
};

const MockNavSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavSection footerNavItems={JSON.stringify(footerNavItems)} />
    </ThemeProvider>
  );
};

describe("Nav Section", () => {
  test("renders NavSection component in footer", () => {
    render(<MockNavSection />);

    const navSection = screen.getByTestId("nav-section-id");
    expect(navSection).toBeInTheDocument();
  });

  test("should contain 3 categories", () => {
    render(<MockNavSection />);

    const navSectionCategories = screen.getAllByTestId(
      "nav-section-category-id"
    );

    expect(navSectionCategories.length).toBe(3);
  });

  // test("should contain 13 items", async () => {
  //   render(<MockNavSection />);

  //   const navSectionItems = await screen.findAllByTestId("nav-section-item-id");

  //   expect(navSectionItems).toBe(13);
  // });
});
