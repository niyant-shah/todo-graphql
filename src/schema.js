const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Your schema will go here
  type Query {
    todos: [Todo]! # Get All Todo list
    todo(id: ID!): Todo # Get Todo by ID
    todoStatus(isStatus: Boolean!): [Todo] # Get Todo list by Status
  }

  type Mutation {
    addTodo(name: String!, isStatus: Boolean!): Todo # Add Todo
    updateStatus(id: Int!, isStatus: Boolean!): Todo # Update Todo
  }

  type Todo {
    id: ID!
    name: String
    isStatus: Boolean!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
