import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

// TODO =====================
// TODO   NAVER_LOGIN(CP)
// TODO =====================

const buttonBlock = {
  border: '2px solid white',
  borderRadius: '8px',
  fontSize: '17px',
  color: 'white',
  cursor: 'pointer',
  background: '#35cf2b',
  justifyContent: 'center',
  padding: '13px 5px',
  width: '100%',
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

const NaverLogin = ({ oAuthLoginHandler }) => {
  const responseKakao = (response) => {
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    oAuthLoginHandler(id, email);
  };
  return (
    <>
      <KaKaoLogin
        token={process.env.REACT_APP_KAKAO_APP_KEY}
        buttonText="kakao"
        onSuccess={responseKakao}
        // eslint-disable-next-line no-console
        onFail={console.error}
        // eslint-disable-next-line no-console
        onLogout={console.info}
        style={buttonBlock}
      >
        <ButtoninnerText>네이버 계정으로 로그인</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};
export default NaverLogin;
