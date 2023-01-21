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
  axios.get(`http://www.reddit.com/search.json?q=${req.query.url}&sort=relevant&limit=5`)
  .then((response) => {
    //console.log(response.data.data.children);
    if (response.data.data.children) {
      console.log(response.data.data.children[0]);
      for (const post of response.data.data.children) {
        permalinks.push({
          permalink: post.data.permalink,
          id: post.data.id,
          subreddit: post.data.subreddit,
          title: post.data.title
        });
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
  console.log('getting comments...');
  axios.get(`https://www.reddit.com/r/${req.query.subreddit}/comments/${req.query.id}.json?`)
  .then((response) => {
    // console.log(response.data[1].data.children);
    res.send(response.data[1].data.children);
    res.end();
    // res.send(response);
  })
  .catch((err) => {
    console.log(err);
    res.end();
    //console.log(err);
  })
};