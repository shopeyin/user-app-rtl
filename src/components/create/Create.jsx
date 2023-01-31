import React, { useState } from "react";
import Users from "../users/Users";
import UsersLeft from "../usersleft/Usersleft";
import { setName, setUsers } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";

let nextId = 1;

function Create() {
  const name = useSelector((state) => state.user.name);
  const users = useSelector((state) => state.user.users);

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    dispatch(setUsers({ id: nextId++, name, status: false }));
    dispatch(setName(""));
  };

  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };

  return (
    <>
      <UsersLeft users={users} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            className="form-control form__input "
            aria-describedby="Name"
            onChange={handleChange}
            value={name}
            placeholder="Name"
          />
        </div>
        <button type="submit" className="btn-secondary btn-lg ">
          Submit
        </button>
      </form>
      <Users  />
    </>
  );
}

export default Create;
