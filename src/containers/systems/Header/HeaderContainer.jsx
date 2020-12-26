import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Header from '../../../components/systems/Header/Header';
import useModal from '../../../hooks/useModal';
import { typeLogOut } from '../../../modules/auth/userAuthorization';

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

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(typeLogOut());
  };
  return (
    <>
      <AppRoot>
        <Header logoutHandler={logoutHandler} />
      </AppRoot>
      <ModalOverlay id="modal-overlay" isShow={isShow} onClick={hideModal} />
    </>
  );
}

export default HeaderContainer;
