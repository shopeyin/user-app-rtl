import React from "react";
import Delete from "../delete/Delete";
import User from "./User";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="users">
      {" "}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User status={user.status} name={user.name} id={user.id} />
            <Delete id={user.id} />
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Users;
