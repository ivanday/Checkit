const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/reddit_posts', (req, res) => {
  console.log(req);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});