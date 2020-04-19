import React from "react";
import { TodoApp } from "./containers/TodoApp";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-5 col-md-auto mt-5">
          <h3 className="mb-4">Todo List</h3>
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default App;
