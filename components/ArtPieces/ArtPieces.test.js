import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieces from "../ArtPieces/index.js";

const data = [{name: "Orange Red and Green Abstract Painting", artist: "Steve Johnson"},];


test("renders art pieces title", () => {
  render(<ArtPieces pieces={data}/>);      
  const title = screen.getByText(/orange red and green abstract painting/i);
  expect(title).toBeInTheDocument();
})


test("renders art pieces artist", () => {
  render(<ArtPieces pieces={data}/>);
  const artist = screen.getByText(/steve johnson/i);
  expect(artist).toBeInTheDocument();
})


test("renders image", () => {
  render(<ArtPieces pieces={data}/>);
  const image = screen.getByRole("img");     
  expect(image).toBeInTheDocument();
})


test("renders list", () => {
  render(<ArtPieces pieces={data}/>);
  const list = screen.getByRole("list");     
  expect(list).toBeInTheDocument();
})