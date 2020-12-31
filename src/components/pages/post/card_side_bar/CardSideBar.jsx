import React from 'react';
import styled from 'styled-components';
import CardSideInfo from './card_side_info/CardSideInfo';

const Block = styled.div`
  border-left: 1px solid #e3dfdf;
  margin-left: 25px;
  padding-top: 40px;
  padding-left: 40px;
`;

function CardSideBar({ card, onLikeHandler, like }) {
  return (
    <Block>
      <CardSideInfo card={card} onLikeHandler={onLikeHandler} like={like} />
    </Block>
  );
}

export default CardSideBar;
