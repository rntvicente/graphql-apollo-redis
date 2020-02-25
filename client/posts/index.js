const request = require('request');

const getPosts = new Promise((resolve, reject) => {
  const options = {
    uri: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(`[ERRO] ${error}`);
      return reject(error);
    }

    if (response.statusCode !== 200) {
      console.log(`Fetch "${resources}" returned ${response.statusCode}`);
    }

    return resolve(body);
  });
});

module.exports = { getPosts };
