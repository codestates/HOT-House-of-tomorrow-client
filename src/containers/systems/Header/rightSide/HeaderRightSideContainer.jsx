import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderRightSide from '../../../../components/systems/Header/rightSide/HeaderRightSide';
import { typeLogOut } from '../../../../modules/auth/userAuthorization';
import useLogin from '../../../../hooks/useLogin';
// TODO ============================
// TODO HeaderRightSideContainer(CT)
// TODO ============================

function HeaderRightSideContainer({ history }) {
  const { onLoginModal } = useLogin();
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };
  const dispatch = useDispatch();
  const { isAuth, loginSuccess } = useSelector(({ authorization }) => ({
    loginSuccess: authorization.loginSuccess,
    isAuth: authorization.isAuth,
  }));

  // * ========================
  // *   RIGHT_SIDE_BTN_HANDLER
  // * ========================

  const onProfileHandler = (id) => {
    dropDownHandler();
    history.push(`/users/${id}`);
  };
  const onSettingHandler = () => {
    dropDownHandler();
    history.push('/edit');
  };
  const onLogOutHandler = () => {
    localStorage.removeItem('CURRENT_USER');
    dispatch(typeLogOut());
    dropDownHandler();
    history.push('/');
  };

  const goMyPageHandler = () => {
    history.push(`/users/${isAuth.oAuthId}`);
  };
  const goWriting = () => {
    history.push('/writing');
  };
  useEffect(() => {}, [loginSuccess]);

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const profileImg = userStorage?.profileImg || 'null';

  return (
    <HeaderRightSide
      onLoginModal={onLoginModal}
      isAuth={isAuth}
      openDropDown={openDropDown}
      setOpenDropDown={setOpenDropDown}
      dropDownHandler={dropDownHandler}
      onProfileHandler={onProfileHandler}
      onSettingHandler={onSettingHandler}
      onLogOutHandler={onLogOutHandler}
      profileImg={profileImg}
      goMyPageHandler={goMyPageHandler}
      goWriting={goWriting}
    />
  );
}

export default withRouter(HeaderRightSideContainer);
