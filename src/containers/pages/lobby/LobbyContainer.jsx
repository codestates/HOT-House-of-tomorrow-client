import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LobbyPage from '../../../components/pages/lobby/LobbyPage';

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

  // const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));

  // * ===================
  // *   USE_EFFECT
  // * ===================

  useEffect(() => {
    dispatch(typeGetAllCards());
    dispatch(typeAuthUser());
  }, [dispatch, loginSuccess]);

  useEffect(() => {
    dispatch(typeInitalTag());
  }, [dispatch]);

  // * ===================
  // *   RENDER
  // * ===================
  return <LobbyPage isAuth={isAuth} />;
}

export default LobbyContainer;
