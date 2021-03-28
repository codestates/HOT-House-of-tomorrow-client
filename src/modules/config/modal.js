//* CREATE_REQUEST_ACTION_TYPES
const OPEN_LOGIN_MODAL = 'modal/OPEN_LOGIN_MODAL';
const CLOSE_LOGIN_MODAL = 'modal/CLOSE_LOGIN_MODAL';

//* GENERATE_TYPE_FUNCTION
export const typeOpenLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
});
export const typeCloseLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL,
});

const initialState = {
  loginModal: false,
};

//* REDUCER
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModal: true,
      };
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: false,
      };
    default:
      return state;
  }
}
