import React from "react";

export const Todo = ({ todo, update }) => {
  return (
    <li
      className="list-group-item"
      onClick={() => {
        update(todo.id);
      }}
      style={{
        textDecoration: todo.isStatus ? "line-through" : "none",
      }}
    >
      {todo.name}
    </li>
  );
};

export const TodoList = ({ todos, update }) => {
  const todoNode = todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} update={update} />;
  });

  return <ul className="list-group">{todoNode}</ul>;
};
