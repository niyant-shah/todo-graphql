const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema will go here
  type Todo {
    id: ID!
    name: String
    isStatus: Boolean!
  }

  type Query {
    todos: TodoUpdateResponse # Get All Todo list
    todo(id: ID!): TodoResponse # Get Todo by ID
    todoStatus(isStatus: Boolean!): TodoUpdateResponse # Get Todo list by Status
  }

  type Mutation {
    addTodo(name: String!, isStatus: Boolean!): TodoResponse # Add Todo
    updateStatus(id: Int!, isStatus: Boolean!): TodoResponse # Update Todo
  }

  type TodoUpdateResponse {
    success: Boolean
    message: String
    todos: [Todo]
  }

  type TodoResponse {
    success: Boolean
    message: String
    todo: Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
