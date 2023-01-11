import React, { useEffect } from 'react';
import Comments from './Comments.jsx';
/*global chrome*/
export default function Post({link}) {
  const urlLink = 'http://www.reddit.com' + link;
  useEffect(() => {
    document.getElementById(link).addEventListener("click", () => {
      chrome.tabs.create({
        url: urlLink,
        active: false
      });
    })

    // window.addEventListener(link, (event) => {
    //   console.log('clicked!');
    //   chrome.tabs.create({
    //     url: urlLink,
    //     active: false
    //   })
    // })
  }, []);

  return (
    <li>
      <button id={link} class="post-button">{link}</button>
      <br></br>
      <Comments urlLink={urlLink} />
    </li>
  );
}