import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/systems/Header/Header';
import useModal from '../../../hooks/useModal';

const AppRoot = styled.div`
  z-index: 1;
`;
const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: ${(props) => (props.isShow ? 1000 : -10)};
`;
function HeaderContainer() {
  const [isShow, , hideModal] = useModal();
  return (
    <>
      <AppRoot>
        <Header />
      </AppRoot>
      <ModalOverlay id="modal-overlay" isShow={isShow} onClick={hideModal} />
    </>
  );
}

export default HeaderContainer;
