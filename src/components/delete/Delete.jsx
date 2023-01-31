import React from "react";

import { useDispatch } from "react-redux";
import {  deleteUser } from "../../redux/user/user.action";

function Delete({ id }) {
 let dispatch = useDispatch()

  return (
    <div key={id} data-testid="delete-button">
      <button
        className="btn btn-danger"
        key={id}
        type="submit"
        onClick={() => {
          dispatch(deleteUser(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
