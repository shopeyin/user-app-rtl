import { render, screen, fireEvent } from "@testing-library/react";
import User from "./User";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { updateStatus } from "../../redux/user/user.action";

const mockStore = configureMockStore();

describe("User component", () => {

  let store;
  let dispatch;
  let mockProps = {
    name: "John Doe",
    status: false,
    id: 1,
  };

  beforeEach(() => {
    store = mockStore(mockProps);
    dispatch = jest.fn();
    store.dispatch = dispatch;
  });

  it("should render text accurately", () => {
    render(
      <Provider store={store}>
        <User
          name={mockProps.name}
          status={mockProps.status}
          id={mockProps.id}
        />
      </Provider>
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveTextContent(
      `${mockProps.name} ${mockProps.status} ${mockProps.id}`
    );
  });

  it("should call updateStatus function when clicked", () => {
    render(
      <Provider store={store}>
        <User
          name={mockProps.name}
          status={mockProps.status}
          id={mockProps.id}
        />
      </Provider>
    );
    const user = screen.getByTestId("user");
    fireEvent.click(user);
  
    expect(dispatch).toHaveBeenCalledWith(updateStatus(mockProps));
  });

  it("should have the none text decoration", () => {
    render(
      <Provider store={store}>
        <User
          name={mockProps.name}
          status={mockProps.status}
          id={mockProps.id}
          updateStatus={mockProps.updateStatus}
        />
      </Provider>
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveStyle("text-decoration: none");
  });

  it("should have the line-through text decoration", () => {
    render(
      <Provider store={store}>
        <User
          name={mockProps.name}
          status={true}
          id={mockProps.id}
          updateStatus={mockProps.updateStatus}
        />
      </Provider>
    );
    const user = screen.getByTestId("user");
    expect(user).toHaveStyle("text-decoration: line-through");
  });
});
