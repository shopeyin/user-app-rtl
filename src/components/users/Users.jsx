import React from "react";
import Delete from "../delete/Delete";
import User from "./User";
function Users({ users, handleDelete, updateStatus }) {
  return (
    <div className="users">
      {" "}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User
              status={user.status}
              name={user.name}
              id={user.id}
              updateStatus={updateStatus}
            />
            <Delete id={user.id} handleDelete={handleDelete} />
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Users;
