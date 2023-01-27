import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users compoenent", () => {
  it("render accurate number of props", () => {
    let mockUsers = [
      {
        id: 1,
        name: "ola",
        status: true,
      },
      {
        id: 2,
        name: "bola",
        status: true,
      },
    ];
    let mockDeleteFunc = jest.fn();
    let mockUpdateStatusFunc = jest.fn();
    render(
      <Users
        users={mockUsers}
        handleDelete={mockDeleteFunc}
        updateStatus={mockUpdateStatusFunc}
      />
    );

    let userComponent = screen.getAllByTestId("user");
    let deleteComponent = screen.getAllByTestId("delete-button");
    expect(userComponent).toHaveLength(mockUsers.length);
    expect(deleteComponent).toHaveLength(mockUsers.length);
  });
});
