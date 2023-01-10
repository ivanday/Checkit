const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');
const cors = require('cors');

const port = 4000;

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/reddit_posts', controllers.getRedditPosts);

app.get('/reddit_comments', controllers.getRedditComments);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});