/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { BsPencil, BsHeart } from 'react-icons/bs';
import LogoSrc from '../../../public/Logo.png';
import useModal from '../../../hooks/useModal';
import ProfileMenuContainer from '../../../containers/systems/Header/ProfileMenuContainer';
import { openModal } from '../../modal/Modal';

const HeaderStyle = styled.div`
  background: white;
  border-bottom: solid 1px #ededed;
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0px;
  z-index: 0;
`;
const HeaderContents = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;
const Input = styled.input`
  display: block;
  width: 300px;
  box-sizing: border-box;
  padding: 5px 25px;
  font-family: inherit;
  font-size: 15px;
  line-height: 20px;
  background-color: #f5f5f5;
  color: #424242;
  border: none;
  border-radius: 5px;
  outline: none;
  margin: 0 8vw;
  &::-webkit-input-placeholder {
    color: #bababa;
    text-align: center;
  }
`;
const Writing = styled(BsPencil)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const Like = styled(BsHeart)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;
const Profile = styled.button`
  width: 30px;
  padding: 0;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Header = ({ logoutHandler }) => {
  const [, showModal] = useModal();
  const profileRef = useRef(null);
  return (
    <HeaderStyle>
      <HeaderContents>
        <Logo src={LogoSrc} />
        <Input
          type="text"
          autoComplete="off"
          size="1"
          aria-autocomplete="list"
          placeholder="내일의 집 통합 검색"
          aria-label="내일의 집 통합 검색"
        />
        <Writing />
        <Like />
        <Profile
          onClick={(e) => {
            profileRef.current = e.target;
            openModal({
              content: (
                <ProfileMenuContainer
                  logoutHandler={logoutHandler}
                  trigger={profileRef.current}
                />
              ),
            });
            showModal();
          }}
        >
          <ProfileImg src={null} alt="profile" />
        </Profile>
      </HeaderContents>
    </HeaderStyle>
  );
};
export default Header;
