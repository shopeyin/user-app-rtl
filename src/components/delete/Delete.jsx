import React from "react";

function Delete({ id, handleDelete }) {
  return (
    <div key={id} data-testid="delete-button">
      <button
        className="btn btn-danger"
        key={id}
        type="submit"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
