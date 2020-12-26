import React from 'react';
import { useDispatch } from 'react-redux';
import { typeLogin } from '../../../modules/auth/userAuthorization';
import LoginModal from '../../../components/systems/user_login/LoginModal';

// TODO =====================
// TODO   LOGIN_CONTAINER(CT)
// TODO =====================

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
