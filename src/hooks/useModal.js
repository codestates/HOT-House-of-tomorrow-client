import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../components/modal/Modal';
import { setShowModal } from '../modules/config/dropDownMenu';

const useModal = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.modal.show);
  const showModal = () => {
    dispatch(setShowModal(true));
  };
  const hideModal = () => {
    closeModal();
    dispatch(setShowModal(false));
  };
  return [isShow, showModal, hideModal];
};

export default useModal;
