/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Comments = styled.ul`
  list-style: none;
`;

const CommentPage = styled.ul`
  list-style: none;
`;

function CommentList({ comment }) {
  return (
    <>
      {/* <Comments>
        <li>{comment[0].comment}</li>
      </Comments>
      <CommentPage>
        <li>comment2</li>
      </CommentPage> */}
    </>
  );
}

export default CommentList;
