import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';

const CardBlock = styled.div`
  z-index: 1;
  margin-right: 17px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  img {
    margin-right: 10px;
    width: 30px;
    border: 3px solid #fcf4f4;
    border-radius: 100%;
  }

  strong {
    color: #474747;
    font-weight: 500;
  }
`;
const CardContents = styled.div`
  position: relative;
  margin-bottom: 10px;
  img {
    width: 270px;
    border-radius: 10px;
  }
  div {
    position: absolute;
    right: 18px;
    bottom: 16px;
}
  }
  span {
    font-size: 13px;
    color: #fff;
    text-shadow: 0 0 4px rgba(0,0,0,.5);
    font-weight: 500;
  }
`;

const CardBottom = styled.div`
  display: flex;
  padding: 5px 28px;
  justify-content: space-between;
  margin-bottom: 7px;

  button {
    display: flex;
    background: none;
    outline: none;
    border: none;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 4px;
    font-size: 12px;
    color: #424242;
  }
`;

const HeartBtn = styled(AiFillHeart)`
  fill: transparent;
  stroke: #424242;
  stroke-width: 33px;
  transition: fill 0.1s, stroke 0.1s;
  font-size: 28px;
`;

const CommentBtn = styled(MdModeComment)`
  color: #84ccb5;
  font-size: 28px;
`;

const DescriptionBlock = styled.div`
  width: 270px;
  text-align: start;
  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    color: #414141;
  }
`;

const CommentlI = styled.li`
  list-style: none;
  display: flex;
  align-items: flex-start;
}
  img {
    margin-right: 5px;
    width: 20px;
    border: 3px solid #fcf4f4;
    border-radius: 100%;
  }
  span {
    font-weight: 400;
    font-size: 15px;
    color: #3f3f3f;
  }

  div {
    strong {
      color: #575757;
      font-weight: 700;
      font-size: 15px;
      margin-right:5px
    }
    
  }
`;

const CommentBlock = styled.div`
  ul {
    padding: 0;
    width: 270px;
  }
`;
function Card({ element }) {
  const { User, view, roomImage, like, comments, description } = element;

  const commentList = comments.map((comment) => (
    <CommentlI key={comment.postId}>
      <img src={comment.User.profileImg} alt="profileImage" />
      <div>
        <strong>{comment.User.nickname}</strong>
        <span>{comment.comment}</span>
      </div>
    </CommentlI>
  ));

  return (
    <CardBlock>
      <CardHeader>
        <img src={User.profileImg} alt="profileImage" />
        <div>
          <strong>{User.nickname}</strong>
        </div>
      </CardHeader>
      <CardContents>
        <img src={roomImage} alt="roomImage" />
        <div>
          <span>
            조회수
            {view}
          </span>
        </div>
      </CardContents>
      <CardBottom>
        <button type="button">
          <HeartBtn />
          <span>{like}</span>
        </button>
        <button type="button">
          <CommentBtn />
          <span>{comments.length}</span>
        </button>
      </CardBottom>
      <DescriptionBlock>
        <span>{description}</span>
      </DescriptionBlock>
      <CommentBlock>
        <ul>{commentList}</ul>
      </CommentBlock>
    </CardBlock>
  );
}

export default Card;