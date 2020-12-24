import { call, put, takeEvery } from 'redux-saga/effects';
import * as loginApi from '../../api/auth/userManagement';
import { createRequestActionTypes } from '../../api/createRequestSaga';

//* CREATE_REQUEST_ACTION_TYPES
const [LOGIN_USER, SUCCESS, FAILURE] = createRequestActionTypes(
  'user/LOGIN_USER'
);

//* GENERATE_TYPE_FUNCTION
export const typeLoginUser = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});

//* MAIN_SAGA_FUNCTION
export function* loginSaga(action) {
  try {
    const loginRusult = yield call(loginApi.loginAsync, action.payload);
    yield put({
      type: SUCCESS,
      payload: loginRusult,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* loginWatcherSaga() {
  yield takeEvery(LOGIN_USER, loginSaga);
}

//* REDUCER
export default function userManagement(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
