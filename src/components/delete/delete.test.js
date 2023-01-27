import { render, screen, fireEvent } from "@testing-library/react";
import Delete from "./Delete";

describe("Delete component", () => {
  let id;
  let handleDelete;

  beforeEach(() => {
    id = 1;
    handleDelete = jest.fn();
  });
  it("should have delete text", () => {
    render(<Delete id={id} handleDelete={handleDelete} />);
    let text = screen.getByText("Delete");
    expect(text).toBeInTheDocument();
  });

  it("should call delete function", () => {
    render(<Delete id={id} handleDelete={handleDelete} />);
    let button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
