import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardSideBar from '../../../../components/pages/post/card_side_bar/CardSideBar';
import { typeLikePost } from '../../../../modules/pages/post/cardDetail';

function SideBarContainer({ card }) {
  const dispatch = useDispatch();

  const [like, setLike] = useState({
    pressLike: false,
    likes: card.postData.like,
    likeBefore: false,
  });

  const onLikeHandler = (postId) => {
    if (like.pressLike === true) {
      setLike({
        ...like,
        pressLike: !like.pressLike,
        likes: like.likes - 1,
      });
    } else {
      dispatch(typeLikePost(postId));
      setLike({ ...like, pressLike: !like.pressLike, likes: like.likes + 1 });
    }
  };
  return (
    <>
      <CardSideBar card={card} onLikeHandler={onLikeHandler} like={like} />
    </>
  );
}

export default SideBarContainer;
