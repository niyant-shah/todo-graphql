import React from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { FilterTodo } from "../components/FilterTodo";
import { indexTodo, storeTodo, updateTodo } from "../apis/index";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      active: "All",
      filter: [],
    };
  }

  componentDidMount() {
    indexTodo()
      .then((res) => {
        this.setState({ data: res.todos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addTodo(val) {
    const todo = { name: val, isStatus: false };

    storeTodo(todo)
      .then((res) => {
        this.state.data.push(res.addTodo);
        this.setState({ data: this.state.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleComplented(id) {
    const todo = this.state.data.find((res) => res.id == id);
    let status = todo.isStatus;
    updateTodo(id, !status)
      .then((res) => {
        const todoIndex = this.state.data.findIndex((res) => res.id == id);
        this.state.data[todoIndex] = res.updateStatus;
        this.setState({ data: this.state.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
