import React from 'react';
import PropTypes from 'prop-types';
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

function FilterBarBlock({ modalHandler }) {
  return (
    <Block>
      <Sort modalHandler={modalHandler} />
      <HousingType modalHandler={modalHandler} />
      <Space modalHandler={modalHandler} />
      <RoomSize modalHandler={modalHandler} />
      <Color modalHandler={modalHandler} />
    </Block>
  );
}
//* PROP_TYPES
FilterBarBlock.defaultProps = {
  modalHandler: () => null,
};
FilterBarBlock.propTypes = {
  modalHandler: PropTypes.func,
};

export default FilterBarBlock;
