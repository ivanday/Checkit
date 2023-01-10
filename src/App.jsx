//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*global chrome*/
function App() {
  let currentUrl = '';
  let {redditLink, setRedditLinks} = useState([]);
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    currentUrl = tabs[0].url;
  });
  axios.get('http://localhost:4000/reddit_posts/', {url: 'https://www.commondreams.org/news/congressional-budget-office'})
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
  setTimeout(() => {console.log(currentUrl)}, 5000);
  return (
    <div className="App">
      <h1>Posts at your url: </h1>
      <div>
        {

        }
      </div>
    </div>
  );
}

export default App;
