import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { fakeHeaderData } from '../../../fakeData/fakeHeader';
import MyPost from './myPost/MyPost';
import MyLike from './myLike/MyLike';

const MyPageStyle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 100px;
`;

const MyWriteListLayer = styled.div`
  flex: 1;
  width: 1145px;
`;

const MyWriteHeader = styled.div`
  font-size: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const NavItem = styled.div`
  text-align: center;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  cursor: pointer;
  margin-right: 20px;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: -12px;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
  }
`;

const MyWriteListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function MyPage({ goEdit }) {
  const [activeId, setActiveId] = useState(0);

  const myWriteLists = [
    {
      id: 0,
      profileImg: fakeHeaderData.profileImg,
    },
  ];

  return (
    <MyPageStyle>
      <ProfileCard count={myWriteLists.length} goEdit={goEdit} />
      <MyWriteListLayer>
        <MyWriteListWrap>
          <MyWriteHeader>
            <Link to="/mypage/mypost">
              <NavItem
                isActive={activeId === 0}
                onClick={() => {
                  setActiveId(0);
                }}
              >
                내 게시글
              </NavItem>
            </Link>
            <Link to="/mypage/mylike">
              <NavItem
                isActive={activeId === 1}
                onClick={() => {
                  setActiveId(1);
                }}
              >
                내 게시글
              </NavItem>
            </Link>
          </MyWriteHeader>
          <Switch>
            <Route
              path="/mypage/mypost"
              render={() => <MyPost myWriteLists={myWriteLists} />}
            />
            <Route path="/mypage/mylike" render={() => <MyLike />} />
            <Route
              path="/mypage"
              render={() => <Redirect to="/mypage/mypost" />}
            />
          </Switch>
        </MyWriteListWrap>
      </MyWriteListLayer>
    </MyPageStyle>
  );
}

export default MyPage;
