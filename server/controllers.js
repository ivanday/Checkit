const axios = require('axios');

// axios.get('http://www.reddit.com/search.json?q=https://www.commondreams.org/news/congressional-budget-office&sort=new&limit=5')
//   .then((response) => {
//     for (const post of response.data.data.children) {
//       console.log(post.data.permalink);
//     }

//     //console.log(response.data.data.children);
//   })

exports.getRedditPosts = (req, res) => {
  let permalinks = [];
  console.log('getting request...');
  console.log(req.query.url);
  axios.get(`http://www.reddit.com/search.json?q=${req.query.url}&sort=relevant&limit=5`)
  .then((response) => {
    if (response.data.data.children) {
      for (const post of response.data.data.children) {
        permalinks.push(post.data.permalink);
      }
      res.send(permalinks);
      res.status(200).end();
    }
  })
  .catch((err) => {
    console.log(err);
  })
};

exports.getRedditComments = (req, res) => {
  axios.get(`http://www.reddit.com/comments/${req.query.url}$sort=top`)
  .then((response) => {
    console.log(response);
  })
};