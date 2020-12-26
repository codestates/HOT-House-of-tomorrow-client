import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LobbyPage from '../../../components/pages/lobby/LobbyPage';
import LoginContainer from '../../systems/user_login/LoginContainer';
import loading from '../../../public/loading.gif';

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
  const { load } = useSelector(({ authorization }) => ({
    load: authorization.load,
  }));

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  let loginModal = null;
  if (!userStorage?.token) {
    loginModal = <LoginContainer />;
  }

  const showLoginModal = load ? (
    <LoadingImg src={loading} alt="loading" />
  ) : (
    loginModal
  );

  // * RENDER
  return <LobbyPage showLoginModal={showLoginModal} />;
}

export default LobbyContainer;
