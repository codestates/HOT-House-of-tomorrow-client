import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardSideBar from '../../../../components/pages/post/card_side_bar/CardSideBar';
import { typeLikePost } from '../../../../modules/pages/post/cardDetail';

function SideBarContainer({ card, isAuth }) {
  const dispatch = useDispatch();

  const [like, setLike] = useState({
    pressLike: false,
    likes: card.postData.like,
    likeBefore: false,
  });

  useEffect(() => {
    const userLike = isAuth?.likeposts.split(',').map((e) => Number(e));
    if (userLike.includes(card.postData.id)) {
      setLike({
        ...like,
        pressLike: true,
      });
    }
  }, [isAuth]);

  const onLikeHandler = (postId) => {
    if (like.pressLike === true) {
      dispatch(typeLikePost(postId));
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
