/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlinePencilAlt } from 'react-icons/hi';
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
  width: 35px;
  height: 35px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

const WriteBtn = styled.button`
  cursor: pointer;

  display: flex;
  border: none;
  background: #2fd8b7;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 10px;
  align-items: center;
  &:focus {
    outline: none;
  }
  span {
    margin-right: 5px;
  }
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
  goWriting,
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
        <WriteBtn type="button" onClick={goWriting}>
          <span>글쓰기</span>
          <HiOutlinePencilAlt />
        </WriteBtn>
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
