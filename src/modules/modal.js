import { createAction, handleActions } from 'redux-actions';

const SET_SHOW_MODAL = 'modal/SET_SHOW_MODAL';

export const setShowModal = createAction(SET_SHOW_MODAL);

const initialState = {
  show: false,
};

export default handleActions(
  {
    [SET_SHOW_MODAL]: (state, action) => ({
      ...state,
      show: action.payload,
    }),
  },
  initialState
);
