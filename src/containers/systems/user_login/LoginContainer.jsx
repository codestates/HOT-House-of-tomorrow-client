import React from 'react';
import { useDispatch } from 'react-redux';
import { typeLogin } from '../../../modules/auth/userAuthorization';
import LoginModal from '../../../components/systems/LoginModal/LoginModal';

// * =====================
// *   LOGIN_CONTAINER(CT)
// * =====================

function LoginContainer() {
  //* useDispatch
  const dispatch = useDispatch();

  //* dispatch 'LOGIN_USER' type
  const socialLogin = (userData) => {
    dispatch(typeLogin(userData));
  };

  //* RENDER
  return (
    <>
      <LoginModal socialLogin={socialLogin} />
    </>
  );
}

export default LoginContainer;
