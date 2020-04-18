const todos = [
  { id: 1, name: "Test 1", isStatus: true },
  { id: 2, name: "Test 2", isStatus: false },
  { id: 3, name: "Test 3", isStatus: false },
  { id: 4, name: "Test 4", isStatus: false },
  { id: 5, name: "Test 5", isStatus: true },
  { id: 6, name: "Test 6", isStatus: true },
];

module.exports = {
  Query: {
    todos: () => {
      return {
        success: true,
        message: "Get All Todo List",
        todos: todos,
      };
    },
    todo: (parent, args, context, info) => {
      return {
        success: true,
        message: "Get Todo",
        todo: todos.find((res) => res.id == args.id),
      };
    },
    todoStatus: (parent, args, context, info) => {
      return {
        success: true,
        message: "Get Todo list by Status",
        todos: todos.filter((res) => res.isStatus == args.isStatus),
      };
    },
  },

  Mutation: {
    addTodo: (parent, args, context, info) => {
      let count = todos.length;
      todos.push({ id: count + 1, name: args.name, isStatus: args.isStatus });
      return {
        success: true,
        message: "Create new Todo",
        todo: todos.find((res) => res.name == args.name),
      };
    },
    updateStatus: (parent, args, context, info) => {
      let data = todos.find((res) => res.id == args.id);
      data["isStatus"] = args.isStatus;

      return {
        success: true,
        message: "Update Todo",
        todo: todos.find((res) => res.id == args.id),
      };
    },
  },
};
