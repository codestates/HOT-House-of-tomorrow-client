import React from 'react';
import styled from 'styled-components';
import FilterBarContainer from '../../../containers/systems/filter_Bar/FilterBarContainer';
import CardsContainer from '../../../containers/pages/lobby/cards/CardsContainer';

// TODO =====================
// TODO   LOBBY_PAGE (CP)
// TODO =====================

// * STYLED_COMPONENTS
const Block = styled.div`
  padding: 10px;
  position: relative;
  margin: 0 auto;
  width: 1150px;
  top: 70px;
  z-index: 1;
`;

function LobbyPage({ showLoginModal, isAuth }) {
  // * RENDER
  return (
    <>
      {showLoginModal}
      <Block>
        <FilterBarContainer />
        <CardsContainer isAuth={isAuth} />
      </Block>
    </>
  );
}

export default LobbyPage;
