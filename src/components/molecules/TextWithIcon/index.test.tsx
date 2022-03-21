import { render, screen } from "@testing-library/react";
import TextWithIcon from ".";

describe("Text with Icon", () => {
  it("renders a text with icon with icon at end", () => {
    render(
      <TextWithIcon
        icon="user"
        iconAtEnd={true}
        text="Some Text"
        iconHeight="20px"
        iconWidth="15px"
        textVariant="subtitle1"
      />
    );

    const textElement = screen.getByText("Some Text");

    const iconElement = screen.getByRole("img");
    expect(textElement).toBeDefined();
    expect(iconElement).toBeDefined();

    const TextWithIconElement = screen.getByTestId("text-with-icon");
    expect(TextWithIconElement).toMatchSnapshot();
  });
  it("renders a text with icon with icon at start", () => {
    render(
      <TextWithIcon
        icon="user"
        iconAtEnd={false}
        text="Some Text"
        iconHeight="20px"
        iconWidth="15px"
        textVariant="subtitle1"
      />
    );

    const textElement = screen.getByText("Some Text");

    const iconElement = screen.getByRole("img");
    expect(textElement).toBeDefined();
    expect(iconElement).toBeDefined();

    const TextWithIconElement = screen.getByTestId("text-with-icon");
    expect(TextWithIconElement).toMatchSnapshot();
  });
});
