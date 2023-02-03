import UserActionTypes from "./user.type";
// export const setName = (name) => ({
//   type: UserActionTypes.SET_NAME,
//   payload: name,
// });

export const setName = (name) => {
 // console.log("ACTION-SETNAME", name);
  return {
    type: UserActionTypes.SET_NAME,
    payload: name,
  };
};

export const setUsers = (user) => {
 // console.log("ACTION -SETuser", user);
  return {
    type: UserActionTypes.SET_USERS,
    payload: user,
  };
};

export const deleteUser = (id) => {
 // console.log("ACTION -DELETEuser", id);
  return {
    type: UserActionTypes.DELETE_USER,
    payload: id,
  };
};

export const updateStatus = (userObj) => {
  //console.log("ACTION -Updateuser", userObj);
  return {
    type: UserActionTypes.UPDATE_USER,
    payload: userObj,
  };
};
