import { render, screen } from "@testing-library/react";
import Spotlight from "../Spotlight/index.js";

const data = [{}];

test("renders image", () => {
  render(<Spotlight pieces={data} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders art pieces artist", () => {
  render(<Spotlight pieces={data} />);
  const artist = screen.getByRole("title");
  expect(artist).toBeInTheDocument();
});
