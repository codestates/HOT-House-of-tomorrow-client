import { call, put, takeLatest } from 'redux-saga/effects';
import * as loginApi from '../../api/auth/userAuthorization';

//* CREATE_REQUEST_ACTION_TYPES

//* AUTH_USER
const AUTH_USER = 'userAuthorization/AUTH_USER';
const AUTH_USER_SUCCESS = 'userAuthorization/AUTH_USER_SUCCESS';
const AUTH_USER_FAILURE = 'userAuthorization/AUTH_USER_FAILURE';

//* LOGIN_USER
const LOGIN_USER = 'userAuthorization/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'userAuthorization/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'userAuthorization/LOGIN_USER_FAILURE';

//* LOG_OUT_USER
const LOG_OUT_USER = 'userAuthorization/LOG_OUT_USER';

//* GENERATE_TYPE_FUNCTION
export const typeAuthUser = () => ({
  type: AUTH_USER,
});
export const typeLogin = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});
export const typeLogOut = () => ({
  type: LOG_OUT_USER,
});

//* MAIN_SAGA_FUNCTION
export function* authSaga(action) {
  try {
    const authResult = yield call(loginApi.isAuthAsync, action.payload);
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
export function* userAuthorizationSaga() {
  yield takeLatest(AUTH_USER, authSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
}

//* REDUCER
export default function authorization(state = {}, action) {
  switch (action.type) {
    //* =====================
    //*   AUTH_USER
    //* =====================
    case AUTH_USER:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuth: action.payload,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        error: action.payload.message,
      };

    //* =====================
    //*   LOGIN_USER
    //* =====================
    case LOGIN_USER:
      return {
        ...state,
        load: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload.loginSuccess,
        load: false,
        token: action.payload.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        load: false,
        error: action.payload.message,
      };

    //* =====================
    //*   LOG_OUT_USER
    //* =====================
    case LOG_OUT_USER:
      return {
        ...state,
        isAuth: {},
        logoutSuccess: true,
      };

    default:
      return state;
  }
}
