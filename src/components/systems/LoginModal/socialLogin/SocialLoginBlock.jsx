import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import KakaoLogin from './KakaoLogin';
import FaceBookLogin from './FaceBookLogin';

//* STYLED_COMPONENTS
const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function SocialLoginBlock({ socialLogin }) {
  //* RENDER
  return (
    <Block>
      <KakaoLogin socialLogin={socialLogin} />
      <FaceBookLogin socialLogin={socialLogin} />
    </Block>
  );
}
//* PROP_TYPES
SocialLoginBlock.defaultProps = {
  socialLogin: () => null,
};
SocialLoginBlock.propTypes = {
  socialLogin: PropTypes.func,
};
export default SocialLoginBlock;
