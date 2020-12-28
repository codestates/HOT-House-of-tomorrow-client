import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';

const CardBlock = styled.div`
  z-index: 1;
  margin-right: 17px;
  margin-bottom: 10px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div {
    margin-right: 10px;
    background: #e3e3e3;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  strong {
    color: #474747;
    font-weight: 500;
    margin-bottom: 3px;
  }
`;

const FakeNickName = styled.p`
  background: #e3e3e3;
  width: 60px;
  height: 15px;
  border-radius: 4px;
  margin-bottom: 5px;
  margin-top: 0;
`;

const FakeIntroduction = styled.p`
  background: #e3e3e3;
  width: 130px;
  height: 12px;
  border-radius: 4px;
  margin: 0;
`;

const FakePhoto = styled.div`
  width: 270px;
  height: 270px;
  background: #e3e3e3;
  border-radius: 10px;
`;

const CardContents = styled.div`
  position: relative;
  margin-bottom: 10px;

  span {
    font-size: 13px;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
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
  color: #e3e3e3;
  stroke-width: 33px;
  transition: fill 0.1s, stroke 0.1s;
  font-size: 28px;
`;

const CommentBtn = styled(MdModeComment)`
  color: #e3e3e3;
  font-size: 28px;
`;

function FakeCard() {
  return (
    <CardBlock>
      <CardHeader>
        <div />
        <span>
          <FakeNickName />
          <FakeIntroduction />
        </span>
      </CardHeader>
      <CardContents>
        <FakePhoto />
      </CardContents>
      <CardBottom>
        <button type="button">
          <HeartBtn />
        </button>
        <button type="button">
          <CommentBtn />
        </button>
      </CardBottom>
    </CardBlock>
  );
}

export default FakeCard;
