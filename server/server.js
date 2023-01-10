const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/reddit_posts', controllers.getRedditPosts);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});