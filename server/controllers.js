const axios = require('axios');

// axios.get('http://www.reddit.com/search.json?q=https://www.commondreams.org/news/congressional-budget-office&sort=new&limit=5')
//   .then((response) => {
//     for (const post of response.data.data.children) {
//       console.log(post.data.permalink);
//     }

//     //console.log(response.data.data.children);
//   })

exports.getRedditPosts = (req, res) => {
  console.log(req);
};