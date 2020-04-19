module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define(
    "todo",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
  );

  return Todo;
};
