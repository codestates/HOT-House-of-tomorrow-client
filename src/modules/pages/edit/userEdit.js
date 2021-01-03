import { call, put, takeLatest } from 'redux-saga/effects';
import * as editApi from '../../../api/pages/user_edit/userEdit';

//* CREATE_REQUEST_ACTION_TYPES

//* GET_USER_INFO
const GET_USER_INFO = 'userEdit/GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'userEdit/GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAILURE = 'userEdit/GET_USER_INFO_FAILURE';

//* POST_UPDATE_USER_INFO
const POST_UPDATE_USER_INFO = 'userEdit/POST_UPDATE_USER_INFO';
const POST_UPDATE_USER_INFO_SUCCESS = 'userEdit/POST_UPDATE_USER_INFO_SUCCESS';
const POST_UPDATE_USER_INFO_FAILURE = 'userEdit/POST_UPDATE_USER_INFO_FAILURE';

//* INIT_UPDATE_INFO
const INIT_UPDATE_INFO = 'userEdit/INIT_UPDATE_INFO';

//* GENERATE_TYPE_FUNCTION
export const typeGetUserInfo = () => ({
  type: GET_USER_INFO,
});

export const typeUpdateUserInfo = (data) => ({
  type: POST_UPDATE_USER_INFO,
  payload: data,
});

export const typeInitUpdateInfo = (data) => ({
  type: INIT_UPDATE_INFO,
  payload: data,
});

//* MAIN_SAGA_FUNCTION
export function* getUserInfoSaga() {
  try {
    const result = yield call(editApi.getUserInfoAsync);
    yield put({
      type: GET_USER_INFO_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_USER_INFO_FAILURE,
      payload: e,
    });
  }
}
export function* updateUserInfoSaga(action) {
  try {
    const result = yield call(editApi.postUserUpdateAsync, action.payload);
    yield put({
      type: POST_UPDATE_USER_INFO_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: POST_UPDATE_USER_INFO_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* userInfoSaga() {
  yield takeLatest(GET_USER_INFO, getUserInfoSaga);
  yield takeLatest(POST_UPDATE_USER_INFO, updateUserInfoSaga);
}

const initialState = {
  info: {},
};
//* REDUCER
export default function userEdit(state = initialState, action) {
  switch (action.type) {
    //* =====================
    //*   GET_USER_INFO
    //* =====================
    case GET_USER_INFO:
      return {
        ...state,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case POST_UPDATE_USER_INFO:
      return {
        ...state,
      };
    case POST_UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        update: action.payload,
      };
    case POST_UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case INIT_UPDATE_INFO:
      return {
        ...state,
        update: {},
      };

    default:
      return state;
  }
}
