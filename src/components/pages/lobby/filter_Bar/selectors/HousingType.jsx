import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const Block = styled.div`
  background: #e8e8e8;
  padding: 6px 7px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-right: 4px;

  strong {
    color: #5f5f5f;
    margin-right: 2px;
    font-weight: 700;
    font-size: 15px;
    margin-right: 2px;
  }
`;
function HousingType({ modalHandler, openModal, FilterModalContainer }) {
  return (
    <Block
      onMouseEnter={() => modalHandler('open', 'housingType')}
      onMouseLeave={() => modalHandler('close', 'housingType')}
    >
      <strong>주거형태</strong>
      <FiChevronDown />
      {openModal.housingType ? (
        <FilterModalContainer modalHandler={modalHandler} tab="housingType" />
      ) : null}
    </Block>
  );
}

//* PROP_TYPES
HousingType.defaultProps = {
  modalHandler: () => null,
  openModal: {
    sort: false,
    housingType: false,
    space: false,
    roomSize: false,
    color: false,
  },
};
HousingType.propTypes = {
  modalHandler: PropTypes.func,
  openModal: PropTypes.objectOf(Boolean),
  FilterModalContainer: PropTypes.func.isRequired,
};

export default HousingType;
