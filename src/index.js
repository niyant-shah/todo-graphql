const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const app = express();
const cors = require("cors");

const models = require("./models");

models.sequelize.sync();

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
