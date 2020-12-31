import React from 'react';
import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import logoRow from '../../../public/logoRow.png';
import Selects from './Selects';

const Wrap = styled.div`
  height: 100%;
`;
const LogoWrap = styled.div`
  margin: 0px;
  padding: 20px 20px 0px;
  height: 31px;
`;
const Logo = styled.img`
  width: 88px;
  height: 30px;
  width: 100px;
  height: 25px;
  cursor: pointer;
  display: flex;
`;
const BodyWrap = styled.div`
  height: 100%;
  position: relative;
  margin: 25px auto 0px;
  width: 872px;
  box-sizing: border-box;
  text-align: left;
`;
const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 40px;
`;
const SelectWrap = styled.div`
  margin-bottom: 30px;
`;
const ContentsWrap = styled.div`
  display: flex;
  padding: 0 0 40px;
`;
const BtnWrap = styled.div`
  flex: 1;
`;
const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  transition: opacity 0.1s;
  cursor: pointer;
`;
const InputWrap = styled.div`
  flex: 1;
  margin: 0 25px;
`;
const Acreage = styled.select`
  margin-bottom: 10px;
  padding: 10px 30px 10px 10px;
  width: 100%;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  line-height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border-color: #bdbdbd;
  color: #000;
  outline: none;
  &:focus {
    border-color: #161616;
  }
`;
const AcreageOption = styled.option`
  color: #000;
`;
const Text = styled.textarea`
  height: 200px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  color: #000;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: none;
  &:focus {
    border-color: #161616;
  }
`;
const Footer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 502;
  padding: 10px 20px;
  background-color: hsla(0, 0%, 100%, 0.94);
  border-top: 1px solid #dbdbdb;
`;
const FooterBtnWrap = styled.div``;
const UploadBtn = styled.button`
  padding: 11px 30px;
  font-size: 17px;
  line-height: 26px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  user-select: none;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: #09addb;
    background-color: #09addb;
  }
  &:disabled {
    pointer-events: none;
    cursor: default;
    background-color: #ddd;
  }
`;
const FileInput = styled.input`
  display: none;
`;

const CameraIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const CameraIcon = styled.div`
  font-size: 60px;
  color: #757575;
`;
const CameraText = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: #757575;
`;
const Writing = ({ goLobby }) => (
  <Wrap>
    <LogoWrap>
      <Logo src={logoRow} onClick={goLobby} />
    </LogoWrap>
    <BodyWrap>
      <Title>사진 올리기</Title>
      <SelectWrap>
        <Selects />
      </SelectWrap>
      <ContentsWrap>
        <BtnWrap>
          <FileLabel>
            <FileInput />
            <CameraIconWrap>
              <CameraIcon>
                <AiFillCamera />
              </CameraIcon>
              <CameraText>사진 올리기</CameraText>
            </CameraIconWrap>
          </FileLabel>
        </BtnWrap>
        <InputWrap>
          <Acreage>
            <AcreageOption value="0">원룸</AcreageOption>
            <AcreageOption value="1">거실</AcreageOption>
            <AcreageOption value="2">침실</AcreageOption>
            <AcreageOption value="3">주방</AcreageOption>
            <AcreageOption value="4">욕실</AcreageOption>
            <AcreageOption value="5">베란다</AcreageOption>
          </Acreage>
          <Text placeholder="사진에 대해서 설명해주세요." />
        </InputWrap>
      </ContentsWrap>
    </BodyWrap>
    <Footer>
      <div />
      <FooterBtnWrap>
        <UploadBtn>올리기</UploadBtn>
      </FooterBtnWrap>
    </Footer>
  </Wrap>
);

export default Writing;
