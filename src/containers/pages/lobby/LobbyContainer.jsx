/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import LobbyPage from '../../../components/pages/lobby/LobbyPage';
import LoginContainer from '../../systems/user_login/LoginContainer';
import loading from '../../../public/loading.gif';
import { typeAuthUser } from '../../../modules/auth/userAuthorization';

// TODO =====================
// TODO   LOBBY_CONTAINER(CT)
// TODO =====================

// * STYLED_COMPONENTS
const LoadingImg = styled.img`
  position: fixed;
  width: 15vw;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function LobbyContainer() {
  const dispatch = useDispatch();
  const { load, loginSuccess } = useSelector(({ authorization }) => ({
    load: authorization.load,
    loginSuccess: authorization.loginSuccess,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  let loginModal = null;
  if (!userStorage) {
    loginModal = <LoginContainer />;
  }

  const showLoginModal = load ? (
    <LoadingImg src={loading} alt="loading" />
  ) : (
    loginModal
  );

  // * ===================
  // *   USE_EFFECT
  // * ===================
  useEffect(() => {
    if (loginSuccess) {
      dispatch(typeAuthUser());
    }
  }, [loginSuccess, dispatch]);

  // * ===================
  // *   RENDER
  // * ===================
  return <LobbyPage showLoginModal={showLoginModal} />;
}

export default LobbyContainer;
