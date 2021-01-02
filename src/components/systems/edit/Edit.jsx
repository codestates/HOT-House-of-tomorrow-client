/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 100px;
`;
const EditWrap = styled.div`
  position: relative;
  width: 995px;
  margin: 50px auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  color: #292929;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 60px;
`;
const EditRow = styled.div`
  display: flex;
`;
const EditTitle = styled.span`
  padding-top: 30px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;
const SubTiltle = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #757575;
`;
const InputWrap = styled.div`
  padding-top: 30px;
  input {
    box-sizing: border-box;
    height: 40px;
    width: 400px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    color: #424242;
    font-size: 15px;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(130, 224, 250, 0.5);
    }
  }
  span {
    padding: 10px 20px;
    background: #efefef;
    border-radius: 3px;
  }
`;

const EditImgTitle = styled.span`
  padding-top: 30px;
  width: 100px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  top: 10px;
`;
const ImgWrap = styled.div`
  padding-top: 30px;
`;
const Img = styled.button`
  width: 200px;
  height: 200px;
`;
const EditButton = styled.button`
  margin: 50px 0 0 100px;
  width: 290px;
  border-color: #35c5f0;
  background-color: #35c5f0;
  padding: 11px 10px;
  font-size: 17px;
  line-height: 26px;
  color: #fff;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(130, 224, 250, 0.5);
  }
  &:hover {
    border-color: #09addb;
    background-color: #09addb;
  }
`;
function Edit({
  email,
  nickname,
  setNickname,
  img,
  setImg,
  introduction,
  setIntroduction,
  onUpldateInfo,
}) {
  return (
    <Wrap>
      <EditWrap>
        <Title>회원정보수정</Title>
        <EditRow>
          <EditTitle>
            이메일
            <br />
            <SubTiltle>* 변경불가</SubTiltle>
          </EditTitle>
          <InputWrap>
            <span>{email || ''}</span>
          </InputWrap>
        </EditRow>
        <EditRow>
          <EditTitle>
            별명
            <br />
            <SubTiltle>* 필수항목</SubTiltle>
          </EditTitle>
          <InputWrap>
            <input
              value={nickname || ''}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          </InputWrap>
        </EditRow>
        <EditRow>
          <EditImgTitle>프로필 이미지</EditImgTitle>
          <ImgWrap>
            <Img />
          </ImgWrap>
        </EditRow>
        <EditRow>
          <EditTitle>한줄 소개</EditTitle>
          <InputWrap>
            <input
              value={introduction || ''}
              onChange={(e) => {
                setIntroduction(e.target.value);
              }}
            />
          </InputWrap>
        </EditRow>
        <EditButton onClick={onUpldateInfo}>회원 정보 수정</EditButton>
      </EditWrap>
    </Wrap>
  );
}

export default Edit;
