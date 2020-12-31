import React from 'react';
import styled from 'styled-components';
import { fakeHeaderData } from '../../../fakeData/fakeHeader';

const Wrap = styled.div`
  left: 70px;
  top: 200px;
  width: 1145px;
  background-color: #fff;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  padding: 30px 0px;
  margin: 0 auto;
`;
const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 80px;
`;
const Nickname = styled.span`
  font-size: 25px;
  font-weight: bolder;
`;
const Email = styled.span`
  font-size: 20px;
  margin-top: 10px;
`;
const EditButton = styled.button`
  font-size: 20px;
  margin-top: 30px;
  padding: 0 30px;
  line-height: 50px;
  font-weight: 700;
  width: 100%;
  background-color: #fff;
  border: solid 1px #bababa;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 110px;
`;
const ListCount = styled.span``;
const BtnWrap = styled.div``;
const ProfileCard = ({ count, goEdit }) => (
  <Wrap>
    <Picture src={fakeHeaderData.profileImg} />
    <CardWrap>
      <Nickname>
        <strong>{fakeHeaderData.nickName}</strong>
      </Nickname>
      <Email>{fakeHeaderData.email}</Email>
      <ListCount>
        게시물
        {count}
      </ListCount>
      <BtnWrap>
        <EditButton onClick={goEdit}>Edit</EditButton>
      </BtnWrap>
    </CardWrap>
  </Wrap>
);

export default ProfileCard;
