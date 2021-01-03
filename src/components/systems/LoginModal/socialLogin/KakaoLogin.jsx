import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import KaKaoLogin from 'react-kakao-login';

// * =====================
// *   KAKAO_LOGIN(CP)
// * =====================

//* STYLED_COMPONENTS
const buttonBlock = {
  border: '2px solid white',
  borderRadius: '8px',
  fontSize: '17px',
  color: '#392324',
  cursor: 'pointer',
  background: '#ffe702',
  justifyContent: 'center',
  padding: '13px 5px',
  width: '100%',
  marginBottom: '5px',
  outline: 'none',
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const KakaoLogin = ({ socialLogin }) => {
  //* FUNCTIONS
  const responseKakao = (response) => {
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    const userData = {
      oAuthId: id,
      email,
    };
    socialLogin(userData);
  };

  //* RENDER
  return (
    <>
      <KaKaoLogin
        token="dbffe5ff113e509cae44af75348b8c55"
        onSuccess={responseKakao}
        // eslint-disable-next-line no-console
        onFail={console.error}
        // eslint-disable-next-line no-console
        onLogout={console.info}
        style={buttonBlock}
      >
        <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};

//* PROP_TYPES
KakaoLogin.defaultProps = {
  socialLogin: () => null,
};
KakaoLogin.propTypes = {
  socialLogin: PropTypes.func,
};
export default KakaoLogin;
