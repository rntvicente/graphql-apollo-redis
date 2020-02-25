const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const types = fileLoader(path.join(__dirname, '../schemas/**/*.graphql'));
const schema = mergeTypes(types);

module.exports = schema;
