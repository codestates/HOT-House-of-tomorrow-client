import React from 'react';
import Post from '../../../components/pages/post/Post';

function PostContainer({ match }) {
  console.log(match.params.id);
  return (
    <>
      <Post />
    </>
  );
}

export default PostContainer;
