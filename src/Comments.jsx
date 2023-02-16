import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Comments({post}) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    document.getElementById(post.id).addEventListener("click", () => {
      if (comments.length === 0) {
        axios.get(`https://www.reddit.com/r/${post.subreddit}/comments/${post.id}.json?`)
        .then((response) => {
          // console.log(response.data[1].data.children);
          setComments(response.data[1].data.children);
        })
        .catch((err) => {
          console.log(err);
        })
        // axios.get('http://localhost:4000/reddit_comments', {
        //   params: {
        //     id: post.id,
        //     subreddit: post.subreddit
        //   }
        // })
        // .then((response) => {
        //   //console.log('server response: ', response);
        //   setComments(response.data);
        // })
        // .catch((err) => {
        //   console.log(err);
        // })
      }
      setShowComments(!showComments);
    })

  }, [])
  return (
    <>
    <div>
      {showComments && comments.length > 0 &&
      comments.map((comment) => {
        console.log('mapped comment: ', comment);
        return (
          <>
            <span class="score">{comment.data.score}  </span>
            <span>{comment.data.body}</span>
            <br></br>
            <br></br>
          </>
        )
      })}
    </div>
    </>
  )
}