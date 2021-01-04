import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardSideBar from '../../../../components/pages/post_detail/card_side_bar/CardSideBar';
import {
  typeLikePost,
  typeDeletePost,
  typeInitPostState,
} from '../../../../modules/pages/post/cardDetail';
import { typeAuthUser } from '../../../../modules/auth/userAuthorization';

function SideBarContainer({ card, isAuth, history }) {
  const { deletePost } = useSelector(({ cardDetail }) => ({
    deletePost: cardDetail.deletePost,
  }));
  const dispatch = useDispatch();

  const [like, setLike] = useState({
    pressLike: false,
    likes: card.postData.like,
    likeBefore: false,
  });

  useEffect(() => {
    const userLike = isAuth?.likeposts.split(',').map((e) => Number(e));
    if (userLike) {
      if (userLike.includes(card.postData.id)) {
        setLike({
          ...like,
          pressLike: true,
        });
      }
    }
  }, [isAuth]);

  const deleteCardHandler = (postId) => {
    dispatch(typeDeletePost(postId));
    dispatch(typeInitPostState());
  };

  useEffect(() => {
    if (deletePost) {
      history.push('/');
    }
    dispatch(typeInitPostState());
  }, [deletePost]);

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
    dispatch(dispatch(typeAuthUser()));
  };
  return (
    <>
      <CardSideBar
        card={card}
        onLikeHandler={onLikeHandler}
        like={like}
        deleteCardHandler={deleteCardHandler}
        isAuth={isAuth}
      />
    </>
  );
}

export default SideBarContainer;
