import UserActionTypes from "./user.type";

const INITIAL_STATE = {
  name: "",
  users: [],
};


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UserActionTypes.SET_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case UserActionTypes.UPDATE_USER:
      console.log(action);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, status: !action.payload.status };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

export default userReducer;
