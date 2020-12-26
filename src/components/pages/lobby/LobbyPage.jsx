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
  width: 57vw;
  top: 100px;
`;

function LobbyPage({ showLoginModal }) {
  // * RENDER
  return (
    <div>
      {showLoginModal}
      <Block>
        <FilterBarContainer />
      </Block>
    </div>
  );
}

export default LobbyPage;
