import React from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { FilterTodo } from "../components/FilterTodo";

window.id = 0;
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      active: "All",
      filter: [],
    };
  }

  addTodo(val) {
    const todo = { name: val, isStatus: false, id: window.id++ };

    this.state.data.push(todo);

    this.setState({ data: this.state.data });
  }

  handleComplented(id) {
    const todo = this.state.data.find((res) => res.id == id);
    todo["isStatus"] = !todo.isStatus;

    this.setState({ data: this.state.data });
  }

  handleFilter(type) {
    let todos = [];
    if (type == "Active") {
      todos = this.state.data.filter((res) => res.isStatus == false);
    } else if (type == "Complete") {
      todos = this.state.data.filter((res) => res.isStatus == true);
    }

    this.setState({ active: type, filter: todos });
  }

  render() {
    let list = [];

    if (this.state.active == "All") {
      list = this.state.data;
    } else {
      list = this.state.filter;
    }

    return (
      <div>
        <AddTodo addTodo={this.addTodo.bind(this)} />
        <FilterTodo
          active={this.state.active}
          filter={this.handleFilter.bind(this)}
        />
        <TodoList todos={list} update={this.handleComplented.bind(this)} />
      </div>
    );
  }
}
