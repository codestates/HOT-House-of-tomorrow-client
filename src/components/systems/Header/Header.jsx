import React from 'react';
import styled from 'styled-components';

import HeaderLeftSide from './leftSide/HeaderLeftSide';
import HeaderSearchBar from './searchBar/HeaderSearchBar';
import HeaderRightSideContainer from '../../../containers/systems/Header/rightSide/HeaderRightSideContainer';

const HeaderBlock = styled.div`
  background: white;
  border-bottom: solid 1px #ededed;
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0px;
  z-index: 1;
`;
const ContentsBlock = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  position: relative;
  width: 1000px;
}
`;

const Header = () => (
  <HeaderBlock>
    <ContentsBlock>
      <HeaderLeftSide />
      <HeaderSearchBar />
      <HeaderRightSideContainer />
    </ContentsBlock>
  </HeaderBlock>
);
export default Header;
