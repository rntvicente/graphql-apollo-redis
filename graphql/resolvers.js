const path = require('path');
const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');

const array = fileLoader(path.join(__dirname, '../resolvers/**/*-resolvers.js'));
const resolvers = mergeResolvers(array);

module.exports = resolvers;