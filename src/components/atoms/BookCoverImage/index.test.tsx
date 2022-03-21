import { render, screen } from "@testing-library/react";
import CoverImage from "./";

test("renders cover image component", () => {
  render(<CoverImage url="/res/cover images/2.png" />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toMatchSnapshot();
});
