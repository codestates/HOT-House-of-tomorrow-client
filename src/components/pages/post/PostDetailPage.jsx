import React from 'react';
import styled from 'styled-components';
import CardDetail from './card_detail/CardDetail';
import CardSideBar from './card_side_bar/CardSideBar';

const Block = styled.div`
  top: 100px;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1145px;
`;
function PostDetailPage({ options, card, userData }) {
  return (
    <Block>
      <CardDetail options={options} card={card} userData={userData} />
      <CardSideBar />
    </Block>
  );
}

export default PostDetailPage;
