import React from 'react';
import CardSideBar from '../../../../components/pages/post/card_side_bar/CardSideBar';

function SideBarContainer({ card, history }) {
  console.log(history);
  return (
    <>
      <CardSideBar card={card} />
    </>
  );
}

export default SideBarContainer;
