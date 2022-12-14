import React, { useEffect } from "react";
import Link from 'next/link';

import commentsApi from "./api/RequestRemoteApiComments";
import postsApi from "./api/RequestRemoteApiPosts";

import useApi from "./hooks/useApi";

export default function App() {
  // hooks
  const getPostsApi = useApi(postsApi.getPosts);
  const getCommentsApi = useApi(commentsApi.getComments);

  useEffect(() => {
    getPostsApi.request();
    getCommentsApi.request();
  }, []);

  return (
    <div className="App">
      
      {/* GET List: https://jsonplaceholder.typicode.com/posts */}
      <div>
        <h1>Posts API Request</h1>
        { getPostsApi.loading && <p>Posts are loading!</p>}
        { getPostsApi.error && <p>{ getPostsApi.error }</p>}
        <ul>
          { getPostsApi.data?.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>

      {/* GET List: https://jsonplaceholder.typicode.com/comments */}
      <div>
        <h1>Comments API Request</h1>
        { getCommentsApi.loading && <p>Comments are loading!</p>}
        { getCommentsApi.error && <p>{ getCommentsApi.error }</p>}
        <ul>
          { getCommentsApi.data?.map((comment) => (
            <li key={comment.id}>
              {comment.name}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="title">
        <Link href="/">
          <a>Back to index.js</a>
        </Link>
      </h2>

    </div>
  );
}