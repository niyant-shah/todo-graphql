module.exports = {
  Query: {
    todos: async (root, args, { models }) => {
      return await models.todos.findAll();
    },
    todo: async (root, args, { models }) => {
      return await models.todos.findOne({ id: args.id });
    },
    todoStatus: async (root, args, { models }) => {
      return await models.todos.findOne({ isStatus: args.isStatus });
    },
  },

  Mutation: {
    addTodo: async (root, args, { models }) => {
      let today = new Date();
      return await models.todos.create({
        name: args.name,
        isStatus: args.isStatus,
        createdAt: today,
        updatedAt: today
      });
    },
    updateStatus: async (root, args, { models }) => {
      let today = new Date();
      await models.todos.update(
        { isStatus: args.isStatus, updatedAt: today },
        { where: { id: Number(args.id) } }
      );
      
      return await models.todos.findByPk(Number(args.id));
    },
  },
};
