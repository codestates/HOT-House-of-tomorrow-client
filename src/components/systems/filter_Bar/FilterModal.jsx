import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Block = styled.div`
  position: absolute;
  top: 50px;
  transform: translateX(-71px);
  animation: ${boxFade} 0.4s forwards;
  z-index: 2;
`;

const FakeBlock = styled.div`
  background: none;
  width: 100%;
  height: 20px;
  position: absolute;
  top: -20px;
`;

const ModalBlock = styled.div`
  background: white;
  text-align: left;
  width: 170px;
  border-radius: 8px;
  box-shadow: -3px 1px 18px rgba(0, 0, 0, 0.4);
  z-index: 2;

  div {
    background: white;
    width: 14px;
    height: 14px;
    transform: rotateZ(45deg);
    z-index: 1;
    position: absolute;
    top: -6px;
    left: 50%;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;

    li {
      cursor: pointer;
      &:hover {
        background: #e1fff9;
        border-radius: 8px;
      }
    }
  }
`;

function FilterModal({ modalHandler, tab, innerTextList }) {
  return (
    <Block onMouseEnter={() => modalHandler('open', tab)}>
      <FakeBlock />
      <ModalBlock>
        <ul>{innerTextList}</ul>
        <div />
      </ModalBlock>
    </Block>
  );
}
//* PROP_TYPES
FilterModal.defaultProps = {
  modalHandler: () => null,
  tab: 'default',
  innerTextList: [],
};
FilterModal.propTypes = {
  modalHandler: PropTypes.func,
  tab: PropTypes.string,
  innerTextList: PropTypes.arrayOf(Array),
};

export default FilterModal;
