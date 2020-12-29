import React from 'react';
import { BsHeart } from 'react-icons/bs';
import styled from 'styled-components';

const Block = styled.div`
  position: sticky;
  top: 80px;
`;

const Like = styled(BsHeart)`
  font-size: 20px;
  color: #444444;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const BtnBlock = styled.div`
  button {
    background-color: #f5f5f5;
    border: none;
    width: 140px;
    padding: 14px 17px;
    border-radius: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    span {
      font-size: 15px;
      color: #444444;
    }
  }
`;

function CardSideInfo({ card }) {
  return (
    <Block>
      <BtnBlock>
        <button type="button">
          <Like />
          <span>{card.postData.like}</span>
        </button>
      </BtnBlock>
      <div>
        <div>
          <a href="/">
            <img src="#" alt="profile_image" />
            <span>name</span>
          </a>
        </div>
      </div>
    </Block>
  );
}

export default CardSideInfo;
