//import logo from './logo.svg';
import './App.css';
import Post from './Post.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*global chrome*/
function App() {
  const [redditLinks, setRedditLinks] = useState([]);
  useEffect(()=> {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      console.log('url:', tabs[0].url);
      let permalinks = [];
      axios.get(`http://www.reddit.com/search.json?q=${tabs[0].url}&sort=relevant&limit=5`)
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
          setRedditLinks(permalinks);
        }
      })
      .catch((err) => {
        console.log(err);
      })

      // axios.get('http://localhost:4000/reddit_posts/', {
      //   params: {
      //     url: tabs[0].url
      //   }
      // })
      // .then((response) => {
      //   console.log(response)
      //   setRedditLinks(response.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
    });
  }, [])
  return (
    <div className="App">
      <h1 class="postsAtUrl">Posts at your url: </h1>
      <div>
        <ul>
        {
          redditLinks.length > 0 &&
            redditLinks.map(post => {
              console.log(post.permalink);

              return <Post post={post} />
            })

        }
        </ul>
      </div>
    </div>
  );
}

export default App;
