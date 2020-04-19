import React from "react";

export const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <div className="form-inline mb-4">
      <input
        className="form-control mr-2"
        ref={(node) => {
          input = node;
        }}
      />
      <button
        className="btn btn-warning"
        onClick={() => {
          addTodo(input.value);
          input.value = "";
        }}
      >
        + Add Todo
      </button>
    </div>
  );
};
