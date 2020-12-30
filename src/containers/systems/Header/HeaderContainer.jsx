/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/systems/Header/Header';

function HeaderContainer({ history }) {
  const goLobby = () => {
    history.push('/');
  };
  return (
    <>
      <Header goLobby={goLobby} />
    </>
  );
}

export default withRouter(HeaderContainer);
