import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import SocialLoginBlock from './socialLogin/SocialLoginBlock';
import logoRow from '../../../public/logoRow.png';
import teamLogo from '../../../public/teamLogo.png';

//* STYLED_COMPONENTS
const BackgroundBlock = styled.div`
  background: rgb(0, 0, 0, 0.3);
  height: 100vh;
  z-index: 2;
  position: relative;
  position: fixed;
  width: 100%;
`;
const LoginModal = styled.div`
  display: flex;
  background: white;
  margin: 0 auto;
  position: relative;
  transform: translate(0, 50%);
  box-shadow: -3px 9px 11px rgba(0, 0, 0, 0.1);
  background: white;
  width: 600px;
  top: 50%;
  height: 450px;

  img {
    width: 290px;
  }

  strong {
    font-weight: 300;
    font-size: 17px;
  }
`;
const LeftInnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 215px;
  background: #f1f3f5;
  img {
    width: 135px;
  }
`;
const RightInnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  height: 85px;
  top: 115px;

  img {
    margin-bottom: 5px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;
`;

//* RENDER
function Login({ socialLogin }) {
  return (
    <BackgroundBlock>
      <Fade top>
        <LoginModal>
          <LeftInnerBlock>
            <img src={teamLogo} alt="teamLogo" />
            <strong> &lt;Team_hot /&gt;</strong>
          </LeftInnerBlock>
          <RightInnerBlock>
            <TextBox>
              <img src={logoRow} alt="logo" />
              <strong>인테리어 사진 공유 및 소셜 네트워크 서비스</strong>
            </TextBox>
            <SocialLoginBlock socialLogin={socialLogin} />
          </RightInnerBlock>
        </LoginModal>
      </Fade>
    </BackgroundBlock>
  );
}

//* PROP_TYPES
Login.defaultProps = {
  socialLogin: () => null,
};
Login.propTypes = {
  socialLogin: PropTypes.func,
};
export default Login;
