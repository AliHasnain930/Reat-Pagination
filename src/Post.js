import React from 'react';

function Post({ post }) {
  return (
    <div className='post'>
      <div className='post-header'>
        <h3 className='post-title'>{post.title}</h3>
      </div>
      <hr />
      <div className='post-body'>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
