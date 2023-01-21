import React, { useEffect } from 'react';
import Comments from './Comments.jsx';
/*global chrome*/
export default function Post({post}) {
  const urlLink = 'http://www.reddit.com' + post.permalink;
  useEffect(() => {
    document.getElementById(post.permalink).addEventListener("click", () => {
      chrome.tabs.create({
        url: urlLink,
        active: false
      });
    })

  }, []);

  return (
    <>
      <div class="post-box">
        <div class="subreddit-title-container">
          <span class="subreddit">[{post.subreddit}]  </span>
          <button id={post.permalink} class="post-button">{post.title}</button>
        </div>
        <div class="comment-button-container">
          <button id={post.id}>Show comments</button>
        </div>
        <br></br>

      </div>
      <Comments post={post} />
    </>
  );
}