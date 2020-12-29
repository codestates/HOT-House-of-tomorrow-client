import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sort from './selectors/Sort';
import HousingType from './selectors/HousingType';
import Space from './selectors/Space';
import Acreage from './selectors/Acreage';
import Color from './selectors/Color';

const Block = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

function FilterBarBlock({ modalHandler, openModal, FilterModalContainer }) {
  return (
    <Block>
      <Sort
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
      <HousingType
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
      <Space
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
      <Acreage
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
      <Color
        modalHandler={modalHandler}
        openModal={openModal}
        FilterModalContainer={FilterModalContainer}
      />
    </Block>
  );
}
//* PROP_TYPES
FilterBarBlock.defaultProps = {
  modalHandler: () => null,
  openModal: {},
};
FilterBarBlock.propTypes = {
  modalHandler: PropTypes.func,
  openModal: PropTypes.objectOf(Boolean),
  FilterModalContainer: PropTypes.func.isRequired,
};

export default FilterBarBlock;
