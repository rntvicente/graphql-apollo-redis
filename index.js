const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const pkg = require('./package.json')

const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('------------------------------------------------------------------');
  console.log(`             ${pkg.name} - Version: ${pkg.version} 🚀`);
  console.log('------------------------------------------------------------------');
});

apolloServer.applyMiddleware({ app, path: '/graphql' });