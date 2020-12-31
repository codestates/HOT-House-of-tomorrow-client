/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { CgMenuGridO } from 'react-icons/cg';
import DropDownTab from '../dropDownTab/DropDownTab';

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderNavBtn = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 100%;

  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled(CgMenuGridO)`
  font-size: 25px;
  color: #343434;
  &:hover {
    cursor: pointer;
  }
`;
const ProfileImg = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 100%;
`;

function HeaderRightSide({
  isAuth,
  openDropDown,
  dropDownHandler,
  onProfileHandler,
  onSettingHandler,
  onLogOutHandler,
  profileImg,
  goMyPageHandler,
}) {
  return (
    <>
      <RightBlock>
        <HeaderNavBtn type="button" onClick={dropDownHandler}>
          <Menu />
        </HeaderNavBtn>
        <HeaderNavBtn type="button" onClick={goMyPageHandler}>
          <ProfileImg src={profileImg} alt="profile" />
        </HeaderNavBtn>
        {openDropDown ? (
          <DropDownTab
            isAuth={isAuth}
            dropDownHandler={dropDownHandler}
            onProfileHandler={onProfileHandler}
            onSettingHandler={onSettingHandler}
            onLogOutHandler={onLogOutHandler}
          />
        ) : null}
      </RightBlock>
    </>
  );
}

export default HeaderRightSide;
