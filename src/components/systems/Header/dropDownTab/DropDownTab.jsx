/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { BsPeopleCircle, BsHeart, BsGearWide, BsPower } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';

const Block = styled.div`
  position: absolute;
  right: 5px;
  top: 55px;
  z-index: 2;
`;
const ListBlock = styled.ul`
  width: 155px;
  background: white;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  box-shadow: -3px 2px 11px rgba(0, 0, 0, 0.1);

  li {
    display: flex;
    align-items: center;
    &:hover {
      background: #e1efeb;
    }

    svg {
      margin-right: 10px;
    }

    strong {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

const ListBtn = styled.button`
  width: 100%;
  padding: 7px 10px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    outline: none;
  }
`;
function DropDownTab({
  isAuth,
  dropDownHandler,
  onProfileHandler,
  onSavedHandler,
  onSettingHandler,
  onLogOutHandler,
}) {
  return (
    <Block>
      <OutsideClickHandler
        onOutsideClick={() => {
          dropDownHandler();
        }}
      >
        <ListBlock>
          <li>
            <ListBtn
              type="button"
              onClick={() => onProfileHandler(isAuth.oAuthId)}
            >
              <BsPeopleCircle />
              <strong>프로필</strong>
            </ListBtn>
          </li>
          <li>
            <ListBtn type="button" onClick={onSettingHandler}>
              <BsGearWide />
              <strong>설정</strong>
            </ListBtn>
          </li>
          <li>
            <a href="/">
              <ListBtn type="button" onClick={onLogOutHandler}>
                <BsPower />
                <strong>로그아웃</strong>
              </ListBtn>
            </a>
          </li>
        </ListBlock>
      </OutsideClickHandler>
    </Block>
  );
}

export default DropDownTab;
