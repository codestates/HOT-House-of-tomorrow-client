import React from 'react';
import styled from 'styled-components';

const CardFooterTag = styled.footer`
  text-align: left;
  p {
    span {
      font-size: 12px;
      display: inline-block;
      margin: 0;
      padding: 0;
      color: #727272;
    }
    span:after {
      content: '·';
      margin: 0 7px 0 4px;
      color: #bdbdbd;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

function CardFooter({ postData, comment }) {
  return (
    <CardFooterTag>
      <p>
        <span>
          조회수
          {postData.view}
        </span>
        <span>
          좋아요
          {postData.like}
        </span>
        <span>
          댓글
          {comment.length}
        </span>
      </p>
    </CardFooterTag>
  );
}

export default CardFooter;
