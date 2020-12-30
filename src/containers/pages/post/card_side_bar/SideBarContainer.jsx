import React from 'react';
import { useDispatch } from 'react-redux';
import CardSideBar from '../../../../components/pages/post/card_side_bar/CardSideBar';
import { typeLikePost } from '../../../../modules/pages/post/cardDetail';

function SideBarContainer({ card }) {
  const dispatch = useDispatch();
  const onLikeHandler = (postId) => {
    console.log('like!');
    dispatch(typeLikePost(postId));
  };
  return (
    <>
      <CardSideBar card={card} onLikeHandler={onLikeHandler} />
    </>
  );
}

export default SideBarContainer;
