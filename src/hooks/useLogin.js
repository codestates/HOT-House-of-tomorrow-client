/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
  typeOpenLoginModal,
  typeCloseLoginModal,
} from '../modules/config/modal';

function useLogin() {
  const dispatch = useDispatch();
  const { loginModal } = useSelector(({ modal }) => ({
    loginModal: modal.loginModal,
  }));

  const onLoginModal = () =>
    loginModal
      ? dispatch(typeCloseLoginModal())
      : dispatch(typeOpenLoginModal());

  return { onLoginModal, loginModal };
}

export default useLogin;
