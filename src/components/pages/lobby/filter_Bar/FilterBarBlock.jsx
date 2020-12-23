import React from 'react';
import styled from 'styled-components';
import Sort from './selectors/Sort';
import HousingType from './selectors/HousingType';
import Space from './selectors/Space';
import RoomSize from './selectors/RoomSize';
import Color from './selectors/Color';

const Block = styled.div`
  display: flex;
  flex-direction: row;
`;

function FilterBarBlock() {
  return (
    <Block>
      <Sort />
      <HousingType />
      <Space />
      <RoomSize />
      <Color />
    </Block>
  );
}

export default FilterBarBlock;
