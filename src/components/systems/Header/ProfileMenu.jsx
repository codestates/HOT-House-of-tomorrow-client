import React from 'react';
import styled from 'styled-components';
import { BsPeopleCircle, BsHeart, BsGearWide, BsPower } from 'react-icons/bs';

const Menu = styled.div`
  z-index: 100;
  position: relative;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(63, 71, 77, 0.2);
  min-width: 200px;
  padding: 0px;
  left: ${(props) => `${props.position?.left}px`};
  top: ${(props) => `${props.position?.top}px`};
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    display: block;
    transition: border-color 0.2s;
    left: calc(50% - 6.5px);
    top: -9px;
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 0 6.5px 9.5px;
    transform: translateX(-0.5px);
  }
  &:before {
    content: '';
    position: absolute;
    display: block;
    transition: border-color 0.2s;
    left: calc(50% - 9.5px);
    top: -10px;
    border-color: transparent transparent #dbdbdb;
    border-style: solid;
    border-width: 0 9px 10px;
  }
`;
const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    background-color: #f7f8fa;
  }
  &:last-child {
    border-top: 1px solid #dbdbdb;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;
const Label = styled.span`
  margin-left: 20px;
`;
const IconStyle = styled.div`
  margin-left: 10px;
`;

const ProfileMenu = ({ position, menuRef }) => {
  const menuItems = [
    {
      label: '마이 페이지',
      handler: () => {},
    },
    {
      label: '찜 목록',
      handler: () => {},
    },
    {
      label: '설정',
      handler: () => {},
    },
    {
      label: '로그아웃',
      handler: () => {},
    },
  ];
  const Icons = [BsPeopleCircle, BsHeart, BsGearWide, BsPower];

  return (
    <Menu
      ref={menuRef}
      position={position}
      onClick={(event) => event.stopPropagation()}
    >
      {menuItems.map((item, i) => {
        const Icon = Icons[i];
        return (
          <MenuItem key={item.label} onClick={item.handler}>
            <IconStyle>
              <Icon />
            </IconStyle>
            <Label>{item.label}</Label>
          </MenuItem>
        );
      })}
    </Menu>
  );
};
export default ProfileMenu;
