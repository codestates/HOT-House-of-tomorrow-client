import { call, put, takeLatest } from 'redux-saga/effects';
import * as userPageApi from '../../../api/pages/user_page/userPage';

//* CREATE_REQUEST_ACTION_TYPES

//* AUTH_USER
const GET_USER_CARDS = 'myPage/GET_USER_CARDS';
const GET_USER_CARDS_SUCCESS = 'myPage/GET_USER_CARDS_SUCCESS';
const GET_USER_CARDS_FAILURE = 'myPage/GET_USER_CARDS_FAILURE';

const GET_USER_LIKES = 'myPage/GET_USER_LIKES';
const GET_USER_LIKES_SUCCESS = 'myPage/GET_USER_LIKES_SUCCESS';
const GET_USER_LIKES_FAILURE = 'myPage/GET_USER_LIKES_FAILURE';

const INIT_USER_CARDS = 'myPage/INIT_USER_CARDS';

//* GENERATE_TYPE_FUNCTION
export const typeGetUserCards = (userId) => ({
  type: GET_USER_CARDS,
  payload: userId,
});

export const typeInitUserCards = () => ({
  type: INIT_USER_CARDS,
});

export const typeGetUserLikes = () => ({
  type: GET_USER_LIKES,
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

export function* getUserLikesSaga(action) {
  try {
    const result = yield call(userPageApi.getUserLikesAsync, action.payload);
    yield put({
      type: GET_USER_LIKES_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_USER_LIKES_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* getUserCardsWatcherSaga() {
  yield takeLatest(GET_USER_CARDS, getUserCardsSaga);
  yield takeLatest(GET_USER_LIKES, getUserLikesSaga);
}
const initialState = {
  userCards: { getMyPost: false, userPosts: [], userInfo: {} },
};
//* REDUCER
export default function userPage(state = initialState, action) {
  switch (action.type) {
    //* =====================
    //*   GET_USER_CARDS
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
        error: action.payload.getLikePost,
      };
    //* =====================
    //*   INIT_USER_CARDS
    //* =====================
    case INIT_USER_CARDS:
      return {
        ...state,
        userCards: { getMyPost: false, userPosts: [], userInfo: {} },
      };

    //* =====================
    //*   GET_USER_LIKES
    //* =====================
    case GET_USER_LIKES:
      return {
        ...state,
      };
    case GET_USER_LIKES_SUCCESS:
      return {
        ...state,
        likeCards: action.payload,
      };
    case GET_USER_LIKES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
