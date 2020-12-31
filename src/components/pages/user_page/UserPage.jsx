/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserProfile from './user_profile/UserProfile';
import { fakeHeaderData } from '../../../fakeData/fakeHeader';
import UserCards from './user_cards/UserCards';

const Block = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  padding: 40px 30px 0px 30px;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 60px;
`;

const MyWriteListLayer = styled.div`
  flex: 1;
  width: 100%;
`;

const MyWriteHeader = styled.div`
  font-size: 20px;
  padding: 17px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const NavItem = styled.div`
  text-align: center;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  cursor: pointer;
  font-size: 12px;
  color: #323232;
  margin-right: 20px;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #595959;
    position: absolute;
    top: -18px;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
  }
`;

const MyWriteListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const A = styled(Link)`
  text-decoration: none;
`;
function UserPage({ goEdit, userPosts, userInfo }) {
  const [activeId, setActiveId] = useState(0);

  const myWriteLists = [
    {
      id: 0,
      profileImg: fakeHeaderData.profileImg,
    },
  ];

  return (
    <Block>
      <UserProfile
        count={myWriteLists.length}
        goEdit={goEdit}
        userInfo={userInfo}
        userPosts={userPosts}
      />

      <MyWriteListLayer>
        <MyWriteListWrap>
          <MyWriteHeader>
            <A to="/mypage/mypost">
              <NavItem
                isActive={activeId === 0}
                onClick={() => {
                  setActiveId(0);
                }}
              >
                게시물
              </NavItem>
            </A>
            <A to="/mypage/mylike">
              <NavItem
                isActive={activeId === 1}
                onClick={() => {
                  setActiveId(1);
                }}
              >
                좋아요
              </NavItem>
            </A>
          </MyWriteHeader>
        </MyWriteListWrap>
      </MyWriteListLayer>
      <UserCards userPosts={userPosts} />
    </Block>
  );
}

export default UserPage;
