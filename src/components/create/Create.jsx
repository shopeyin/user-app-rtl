import React, { useState } from "react";
import Users from "../users/Users";
import UsersLeft from "../usersleft/Usersleft";

let nextId = 1;

function Create() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUsers([...users, { id: nextId++, name, status: false }]);
    setName("");
  };

  const handleDelete = (id) => {
    let modifiedArray = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(modifiedArray);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const updateStatus = (id, status) => {
    if (!id) return;
    const index = users.findIndex((item) => item.id === id);

    const newUsers = [...users];

    newUsers[index] = { ...newUsers[index], status: !status };

    setUsers(newUsers);
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
      <Users
        users={users}
        handleDelete={handleDelete}
        updateStatus={updateStatus}
      />
    </>
  );
}

export default Create;
