const { getPosts } = require('../client/posts')

const resolvers = {
  Query: {
    getPosts: async () => {
      const posts = await getPosts();
      return posts;
    },
  },
};