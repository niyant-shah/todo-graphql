const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("todo-graphql", "root", "niyant$4", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model")(sequelize, Sequelize);

module.exports = db;
