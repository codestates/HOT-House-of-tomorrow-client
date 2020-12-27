import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';

const CardBlock = styled.div`
  margin-right: 13px;
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
  img {
    width: 14vw;
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

function Card({ element }) {
  const { User, view, roomImage, like, comments } = element;

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
    </CardBlock>
  );
}

export default Card;
