/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeLogin } from '../../../modules/auth/userAuthorization';
import LoginModal from '../../../components/systems/LoginModal/LoginModal';
import useLogin from '../../../hooks/useLogin';

// * =====================
// *   LOGIN_CONTAINER(CT)
// * =====================

function LoginContainer() {
  //* useDispatch
  const dispatch = useDispatch();
  const { onLoginModal, loginModal } = useLogin();
  const { loginSuccess, isAuth } = useSelector(({ authorization }) => ({
    loginSuccess: authorization.loginSuccess,
    isAuth: authorization.isAuth,
  }));

  //* dispatch 'LOGIN_USER' type
  const socialLogin = (userData) => {
    dispatch(typeLogin(userData));
  };

  useEffect(() => {
    if (loginSuccess) {
      onLoginModal();
    }
  }, [loginSuccess]);

  //* RENDER
  return (
    <>
      <LoginModal socialLogin={socialLogin} onLoginModal={onLoginModal} />
    </>
  );
}

export default LoginContainer;
