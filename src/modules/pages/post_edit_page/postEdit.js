/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as updateCardApi from '../../../api/pages/post_edit_page/postEdit';

//* CREATE_REQUEST_ACTION_TYPES

//* AUTH_USER
const GET_CARD_INFO = 'postEdit/GET_CARD_INFO';
const GET_CARD_INFO_SUCCESS = 'postEdit/GET_CARD_INFO_SUCCESS';
const GET_CARD_INFO_FAILURE = 'postEdit/GET_CARD_INFO_FAILURE';

const POST_UPDATE_CARD = 'postEdit/POST_UPDATE_CARD';
const POST_UPDATE_CARD_SUCCESS = 'postEdit/POST_UPDATE_CARD_SUCCESS';
const POST_UPDATE_CARD_FAILURE = 'postEdit/POST_UPDATE_CARD_FAILURE';

const INIT_UPDATE_USER_CARDS = 'myPage/INIT_USER_CARDS';

//* GENERATE_TYPE_FUNCTION
export const typeGetCardInfo = (postId) => ({
  type: GET_CARD_INFO,
  payload: postId,
});
export const typePostUpdateCard = (postId) => ({
  type: POST_UPDATE_CARD,
  payload: postId,
});

export const typeInitUserCards = () => ({
  type: INIT_UPDATE_USER_CARDS,
});

//* MAIN_SAGA_FUNCTION
export function* getCardInfoSaga(action) {
  try {
    const result = yield call(updateCardApi.getCardInfoAsync, action.payload);
    yield put({
      type: GET_CARD_INFO_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_CARD_INFO_FAILURE,
      payload: e,
    });
  }
}
export function* postUpdateCardSaga(action) {
  try {
    const result = yield call(
      updateCardApi.updateCardInfoAsync,
      action.payload
    );
    yield put({
      type: GET_CARD_INFO_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_CARD_INFO_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* cardUpdateWatcherSaga() {
  yield takeLatest(GET_CARD_INFO, getCardInfoSaga);
  yield takeLatest(POST_UPDATE_CARD, postUpdateCardSaga);
}
const initialState = {
  userCards: { getMyPost: false, userPosts: [], userInfo: {} },
};
//* REDUCER
export default function postEdit(state = {}, action) {
  switch (action.type) {
    //* =====================
    //*   GET_CARD_INFO
    //* =====================
    case GET_CARD_INFO:
      return {
        ...state,
      };
    case GET_CARD_INFO_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    case GET_CARD_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case POST_UPDATE_CARD_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    case POST_UPDATE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case INIT_UPDATE_USER_CARDS:
      return {
        ...state,
        result: {},
      };

    default:
      return state;
  }
}
