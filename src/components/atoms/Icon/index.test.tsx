import { render, screen } from "@testing-library/react";
import Icon from "./";

test("renders icon component", () => {
  render(<Icon url="res/icons/up-arrow.png" />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toMatchSnapshot();
});
