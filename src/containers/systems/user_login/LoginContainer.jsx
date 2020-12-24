import React from 'react';
import { useDispatch } from 'react-redux';
import { typeLoginUser } from '../../../modules/auth/userManagement';
import LoginModal from '../../../components/systems/user_login/LoginModal';

// TODO =====================
// TODO   LOGIN_CONTAINER(CT)
// TODO =====================

function LoginContainer() {
  //* useDispatch
  const dispatch = useDispatch();

  //* dispatch 'LOGIN_USER' type
  const socialLogin = (userData) => {
    dispatch(typeLoginUser(userData));
  };

  //* RENDER
  return (
    <div>
      <LoginModal socialLogin={socialLogin} />
    </div>
  );
}

export default LoginContainer;
