import React from 'react';
import styled from 'styled-components';
import CardSideInfo from './card_side_info/CardSideInfo';

const Block = styled.div`
  border-left: 1px solid #e3dfdf;
  margin-left: 25px;
  padding-top: 40px;
  padding-left: 40px;
`;

function CardSideBar({ card }) {
  return (
    <Block>
      <CardSideInfo card={card} />
    </Block>
  );
}

export default CardSideBar;