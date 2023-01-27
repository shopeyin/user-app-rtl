import React from "react";

function User(props) {
  const dynamicStyle = {
    textDecoration: props.status ? "line-through" : "none",
  };

  return (
    <div
      data-testid="user"
      style={dynamicStyle}
      onClick={() => {
        props.updateStatus(props.id, props.status);
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
