import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
function Space({ modalHandler, openModal, FilterModalContainer }) {
  return (
    <Block
      onMouseEnter={() => modalHandler('open', 'space')}
      onMouseLeave={() => modalHandler('close', 'space')}
    >
      <strong>공간</strong>
      <FiChevronDown />
      {openModal.space ? (
        <FilterModalContainer modalHandler={modalHandler} tab="space" />
      ) : null}
    </Block>
  );
}

//* PROP_TYPES
Space.defaultProps = {
  modalHandler: () => null,
  openModal: {
    sort: false,
    housingType: false,
    space: false,
    roomSize: false,
    color: false,
  },
};
Space.propTypes = {
  modalHandler: PropTypes.func,
  openModal: PropTypes.objectOf(Boolean),
  FilterModalContainer: PropTypes.func.isRequired,
};

export default Space;
