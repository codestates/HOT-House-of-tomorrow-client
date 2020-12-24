import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrap = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : '')};
  align-items: ${(props) => (props.center ? 'center' : '')};
  width: 100%;
  height: 100%;
`;

const Modal = ({ center, children }) => (
  <ModalWrap center={center}>{children}</ModalWrap>
);
const container = document.createElement('div');
export const closeModal = () => {
  ReactDOM.unmountComponentAtNode(container);
};
export const openModal = ({ content }) => {
  const overlay = document.querySelector('#modal-overlay');
  overlay.appendChild(container);
  ReactDOM.render(<Modal>{content}</Modal>, container);
};

export default Modal;
