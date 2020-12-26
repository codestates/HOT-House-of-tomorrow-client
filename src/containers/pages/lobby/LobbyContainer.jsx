import React from 'react';
import { useSelector } from 'react-redux';
import FilterBarContainer from '../../systems/filter_Bar/FilterBarContainer';
import LoginContainer from '../../systems/user_login/LoginContainer';

function LobbyContainer() {
  // eslint-disable-next-line no-unused-vars
  const { isAuth } = useSelector(({ authorization }) => ({
    isAuth: authorization.isAuth?.isAuth,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  let loginModal = null;
  if (!userStorage?.token) {
    loginModal = <LoginContainer />;
  }
  return (
    <>
      {loginModal}
      <FilterBarContainer />
    </>
  );
}

export default LobbyContainer;
