/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LobbyPage from '../../../components/pages/lobby/LobbyPage';
import LoginContainer from '../../systems/user_login/LoginContainer';
import { typeAuthUser } from '../../../modules/auth/userAuthorization';
import {
  typeGetAllCards,
  typeInitalTag,
} from '../../../modules/pages/lobby/cards';

// TODO =====================
// TODO   LOBBY_CONTAINER(CT)
// TODO =====================

// * STYLED_COMPONENTS

function LobbyContainer() {
  const dispatch = useDispatch();
  const { loginSuccess, isAuth } = useSelector(({ authorization }) => ({
    loginSuccess: authorization.loginSuccess,
    isAuth: authorization.isAuth,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  let loginModal = null;
  if (!userStorage) {
    loginModal = <LoginContainer />;
  }

  const showLoginModal = loginModal;

  // * ===================
  // *   USE_EFFECT
  // * ===================

  useEffect(() => {
    if (loginSuccess) {
      dispatch(typeGetAllCards());
      dispatch(typeAuthUser());
    }
  }, [loginSuccess]);

  useEffect(() => {
    dispatch(typeInitalTag());
  }, []);

  // * ===================
  // *   RENDER
  // * ===================
  return <LobbyPage showLoginModal={showLoginModal} isAuth={isAuth} />;
}

export default LobbyContainer;
