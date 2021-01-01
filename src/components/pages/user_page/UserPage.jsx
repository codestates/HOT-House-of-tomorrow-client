import React, { useState } from 'react';
import styled from 'styled-components';
import UserProfile from './user_profile/UserProfile';
import UserCards from './user_cards/UserCards';

const Block = styled.div`
  display: flex;
  margin: 0 auto;
  width: 950px;
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

  button {
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

const NavItem = styled.div`
  text-align: center;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  cursor: pointer;
  font-size: 12px;
  color: #323232;
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

function UserPage({ isAuth, goEdit, userPosts, userInfo, likePosts }) {
  const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER')).nickname;
  const [activeId, setActiveId] = useState(0);

  return (
    <Block>
      {userInfo.nickname ? (
        <>
          <UserProfile
            isAuth={isAuth}
            goEdit={goEdit}
            userInfo={userInfo}
            userPosts={userPosts}
          />

          <MyWriteListLayer>
            <MyWriteListWrap>
              <MyWriteHeader>
                {userInfo?.nickname === currentUser ? (
                  <>
                    <button type="button">
                      <NavItem
                        isActive={activeId === 0}
                        onClick={() => {
                          setActiveId(0);
                        }}
                      >
                        게시물
                      </NavItem>
                    </button>
                    <button type="button">
                      <NavItem
                        isActive={activeId === 1}
                        onClick={() => {
                          setActiveId(1);
                        }}
                      >
                        좋아요
                      </NavItem>
                    </button>
                  </>
                ) : (
                  <button type="button">
                    <NavItem
                      isActive={activeId === 0}
                      onClick={() => {
                        setActiveId(0);
                      }}
                    >
                      게시물
                    </NavItem>
                  </button>
                )}
              </MyWriteHeader>
            </MyWriteListWrap>
          </MyWriteListLayer>

          {!activeId ? (
            <UserCards userPosts={userPosts} />
          ) : (
            <UserCards userPosts={likePosts?.post ? likePosts.post : []} />
          )}
        </>
      ) : null}
    </Block>
  );
}

export default UserPage;
