import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImgBlock = styled.div`
  width: 300px;
  margin-right: 20px;
  div {
    margin: 0 auto;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
`;

const Nickname = styled.span`
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  strong {
    font-weight: 400;
    color: #2e2e2e;
  }
`;
const Email = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
`;
const EditButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  padding: 6px 8px;
  background-color: #fff;
  border: solid 1px #bababa;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: #efefef;
  }
`;

const ListCount = styled.span`
  margin-bottom: 20px;
  span {
    font-weight: 600;
  }
`;
const BtnWrap = styled.div``;
const UserProfile = ({ isAuth, goEdit, userInfo, userPosts }) => (
  <Wrap>
    <ImgBlock>
      <div>
        <img src={userInfo.profileImg} alt="profile_image" />
      </div>
    </ImgBlock>
    <div>
      <Nickname>
        <strong>{userInfo.nickname}</strong>
        <BtnWrap>
          {isAuth?.nickname === userInfo.nickname ? (
            <EditButton onClick={goEdit}>프로필 편집</EditButton>
          ) : null}
        </BtnWrap>
      </Nickname>
      <ListCount>
        게시물&nbsp;
        <span>{userPosts.length}</span>
      </ListCount>
      <Email>{userInfo.introduction}</Email>
    </div>
  </Wrap>
);

export default UserProfile;
