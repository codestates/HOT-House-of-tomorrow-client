import React from 'react';
import styled from 'styled-components';
import FilterBarContainer from '../../../containers/systems/filter_Bar/FilterBarContainer';

const Block = styled.div`
  padding: 10px;
  position: relative;
  margin: 0 auto;
  width: 57vw;
  top: 100px;
`;

function LobbyPage({ showLoginModal }) {
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
