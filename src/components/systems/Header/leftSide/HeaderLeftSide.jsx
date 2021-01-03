import React from 'react';
import styled from 'styled-components';
import logo from '../../../../public/Logo.png';

const LogoBlock = styled.div``;
const Logo = styled.img`
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

function HeaderLeftSide({ goLobby }) {
  return (
    <>
      <LogoBlock>
        <Logo src={logo} alt="pageLogo" onClick={goLobby} />
      </LogoBlock>
    </>
  );
}

export default HeaderLeftSide;
