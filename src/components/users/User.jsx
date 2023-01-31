import React from "react";
import { updateStatus } from "../../redux/user/user.action";

import { useDispatch } from "react-redux";

function User(props) {
 
  const dispatch = useDispatch();
  const dynamicStyle = {
    textDecoration: props.status ? "line-through" : "none",
  };

  return (
    <div
      data-testid="user"
      style={dynamicStyle}
      onClick={() => {
        dispatch(updateStatus(props));
      }}
    >
      {" "}
      <h1>
        {props.name} {String(props.status)} {props.id}
      </h1>
    </div>
  );
}

export default User;
