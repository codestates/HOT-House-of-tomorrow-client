import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserPage from '../../../components/pages/user_page/UserPage';
import {
  typeGetUserCards,
  typeInitUserCards,
  typeGetUserLikes,
} from '../../../modules/pages/user_page/userPage';

function UserPageContainer({ match, history }) {
  const dispatch = useDispatch();
  const { isAuth, userPosts, userInfo, likePosts } = useSelector(
    ({ authorization, userPage }) => ({
      isAuth: authorization.isAuth,
      userPosts: userPage.userCards.userPosts,
      likePosts: userPage.likeCards,
      userInfo: userPage.userCards.userInfo,
    })
  );

  useEffect(() => {
    dispatch(typeGetUserCards(match.params.id));
  }, [match, dispatch]);

  useEffect(() => {
    dispatch(typeInitUserCards());
    dispatch(typeGetUserLikes());
  }, [dispatch, match.params.id]);

  const goEdit = () => {
    history.push('/edit');
  };
  return (
    <UserPage
      goEdit={goEdit}
      isAuth={isAuth}
      userPosts={userPosts}
      likePosts={likePosts}
      userInfo={userInfo}
    />
  );
}

export default UserPageContainer;
