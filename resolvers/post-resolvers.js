const client = require('../client/posts')

const resolvers = {
  Query: {
    async getPosts(parent, args) {
      const { body } = await client.getPosts();
      console.log('POSTS ', body);
      return body;
    }
  }
};

module.exports = resolvers;
