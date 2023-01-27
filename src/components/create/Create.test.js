import { render, screen, fireEvent } from "@testing-library/react";
import Create from "./Create";
describe("Create component", () => {
  it("should have text label", () => {
    render(<Create />);
    let label = screen.getByLabelText("Name");
    expect(label).toBeInTheDocument();
  });

  it("should test the value attribute in the form", () => {
    render(<Create />);
    const inputValue = screen.getByLabelText("Name");
    fireEvent.change(inputValue, { target: { value: "ola" } });
    expect(inputValue.value).toBe("ola");
  });

  it("should test if child component is rendered", () => {
    render(<Create />);
    let remainingUsers = 0;
    const childComponent = screen.queryByText(
      `Number of users left ${remainingUsers}`
    );
    expect(childComponent).toBeInTheDocument();
  });
});
