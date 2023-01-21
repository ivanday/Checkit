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
      axios.get('http://localhost:4000/reddit_posts/', {
        params: {
          url: tabs[0].url
        }
      })
      .then((response) => {
        console.log(response)
        setRedditLinks(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
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
