import React from "react";

export const FilterTodo = ({ active, filter }) => {
  return (
    <div className="btn-group mb-4">
      <button
        className="btn btn-primary"
        onClick={() => filter("All")}
        disabled={active == "All"}
      >
        All
      </button>
      <button
        className="btn btn-primary"
        onClick={() => filter("Active")}
        disabled={active == "Active"}
      >
        Active
      </button>
      <button
        className="btn btn-primary"
        onClick={() => filter("Complete")}
        disabled={active == "Complete"}
      >
        Complete
      </button>
    </div>
  );
};
