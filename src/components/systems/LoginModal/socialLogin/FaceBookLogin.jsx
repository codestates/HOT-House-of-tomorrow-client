import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// TODO =====================
// TODO   FACE_BOOK(CP)
// TODO =====================

const ButtonBlock = styled.button`
  font-size: 17px;
  padding: 13px 5px;
  background: #3779e5;
  width: 99%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const FaceBookLogin = ({ socialLogin }) => {
  const responseKakao = (response) => {
    const userData = {
      oAuthId: Number(response.id.substring(0, 7)),
      email: response.email,
    };
    socialLogin(userData);
  };
  return (
    <FacebookLogin
      appId="3877367725661613"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseKakao}
      render={(renderProps) => (
        <ButtonBlock type="button" onClick={renderProps.onClick}>
          <ButtoninnerText>페이스북 계정으로 로그인</ButtoninnerText>
        </ButtonBlock>
      )}
    />
  );
};
export default FaceBookLogin;
