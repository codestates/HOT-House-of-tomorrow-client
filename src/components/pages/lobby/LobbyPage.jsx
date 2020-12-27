/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import FilterBarContainer from '../../../containers/systems/filter_Bar/FilterBarContainer';

// TODO =====================
// TODO   LOBBY_PAGE (CP)
// TODO =====================

// * STYLED_COMPONENTS
const Block = styled.div`
  padding: 10px;
  position: relative;
  margin: 0 auto;
  width: 1000px;
  top: 100px;
`;

function LobbyPage({ showLoginModal }) {
  // * RENDER
  return (
    <>
      {showLoginModal}
      <Block>
        <FilterBarContainer />
      </Block>
    </>
  );
}

export default LobbyPage;
