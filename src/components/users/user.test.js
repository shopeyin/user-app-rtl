import { render, screen, fireEvent } from "@testing-library/react";
import User from "./User";
describe("User component", () => {
  let name;
  let status;
  let id;
  let updateStatus;

  beforeEach(() => {
    name = "John Doe";
    status = false;
    id = 1;
    updateStatus = jest.fn();
  });

  it("should render text accurately", () => {
    render(
      <User name={name} status={status} id={id} updateStatus={updateStatus} />
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveTextContent(`${name} ${status} ${id}`);
  });

  it("should call updateStatus function when clicked", () => {
    render(
      <User name={name} status={status} id={id} updateStatus={updateStatus} />
    );
    const user = screen.getByTestId("user");
    fireEvent.click(user);
    expect(updateStatus).toHaveBeenCalledWith(id, status);
  });

  it("should have the none text decoration", () => {
    render(
      <User name={name} status={status} id={id} updateStatus={updateStatus} />
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveStyle("text-decoration: none");
  });

  it("should have the line-through text decoration", () => {
    render(
      <User name={name} status={true} id={id} updateStatus={updateStatus} />
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveStyle("text-decoration: line-through");
  });
});
