/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserPage from '../../../components/pages/user_page/UserPage';
import { typeGetUserCards } from '../../../modules/pages/user_page/userPage';

function UserPageContainer({ match, history }) {
  const dispatch = useDispatch();
  const { userPosts, userInfo } = useSelector(({ userPage }) => ({
    userPosts: userPage.userCards.userPosts,
    userInfo: userPage.userCards.userInfo,
  }));

  useEffect(() => {
    dispatch(typeGetUserCards(match.params.id));
  }, []);

  const goEdit = () => {
    history.push('/edit');
  };
  return <UserPage goEdit={goEdit} userPosts={userPosts} userInfo={userInfo} />;
}

export default UserPageContainer;
