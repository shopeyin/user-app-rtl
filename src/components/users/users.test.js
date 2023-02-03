import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("Users compoenent", () => {
  let store;

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

  beforeEach(() => {
    store = mockStore({
      user: {
        users: mockUsers,
      },
    });
  });

  it("render accurate number of props", () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    let userComponent = screen.getAllByTestId("user");

    let deleteComponent = screen.getAllByTestId("delete-button");
    expect(userComponent).toHaveLength(mockUsers.length);
    expect(deleteComponent).toHaveLength(mockUsers.length);
  });
});
