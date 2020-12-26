import { call, put, takeEvery } from 'redux-saga/effects';
import * as loginApi from '../../api/auth/userAuthorization';

//* CREATE_REQUEST_ACTION_TYPES
const AUTH_USER = 'auth/AUTH_USER';
const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
const AUTH_USER_FAILURE = 'auth/AUTH_USER_FAILURE';

const LOGIN_USER = 'auth/LOG_OUT_USER';
const LOGIN_USER_SUCCESS = 'auth/LOG_OUT_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'auth/LOG_OUT_USER_FAILURE';

//* GENERATE_TYPE_FUNCTION
export const typeAuthUser = () => ({
  type: AUTH_USER,
});
export const typeLogin = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});

//* MAIN_SAGA_FUNCTION
export function* authSaga(action) {
  try {
    const authResult = yield call(loginApi.loginAsync, action.payload);
    yield put({
      type: AUTH_USER_SUCCESS,
      payload: authResult,
    });
  } catch (e) {
    yield put({
      type: AUTH_USER_FAILURE,
      payload: e,
    });
  }
}
export function* loginSaga(action) {
  try {
    const loginRusult = yield call(loginApi.loginAsync, action.payload);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: loginRusult,
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* authWatcherSaga() {
  yield takeEvery(AUTH_USER, authSaga);
}
export function* loginWatcherSaga() {
  yield takeEvery(AUTH_USER, loginSaga);
}

//* REDUCER
export default function authorization(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };

    case LOGIN_USER:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload.loginSuccess,
        token: action.payload.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
