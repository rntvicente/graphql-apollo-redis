const request = require('request');

const getPosts = () => new Promise((resolve, reject) => {
  const options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    json: true
  };

  request(options, (err, response, body) => {
    if (err) {
      reject(err);
    }
    resolve({
      response,
      body
    });
  });
});

module.exports = { getPosts };
