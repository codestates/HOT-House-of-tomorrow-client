import { call, put, takeLatest } from 'redux-saga/effects';
import * as userPageApi from '../../../api/pages/user_page/userPage';

//* CREATE_REQUEST_ACTION_TYPES

//* AUTH_USER
const GET_USER_CARDS = 'myPage/GET_USER_CARDS';
const GET_USER_CARDS_SUCCESS = 'myPage/GET_USER_CARDS_SUCCESS';
const GET_USER_CARDS_FAILURE = 'myPage/GET_USER_CARDS_FAILURE';

//* GENERATE_TYPE_FUNCTION
export const typeGetUserCards = (userId) => ({
  type: GET_USER_CARDS,
  payload: userId,
});

//* MAIN_SAGA_FUNCTION
export function* getUserCardsSaga(action) {
  try {
    const result = yield call(userPageApi.getUserCardsAsync, action.payload);
    yield put({
      type: GET_USER_CARDS_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_USER_CARDS_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* getUserCardsWatcherSaga() {
  yield takeLatest(GET_USER_CARDS, getUserCardsSaga);
}
const initialState = {
  userCards: { getMyPost: false, userPosts: [], userInfo: {} },
};
//* REDUCER
export default function userPage(state = initialState, action) {
  switch (action.type) {
    //* =====================
    //*   GET_MY_CARDS
    //* =====================
    case GET_USER_CARDS:
      return {
        ...state,
      };
    case GET_USER_CARDS_SUCCESS:
      return {
        ...state,
        userCards: action.payload,
      };
    case GET_USER_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
