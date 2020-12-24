import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userManagement, { loginWatcherSaga } from './auth/userManagement';
import config from './config/filterTabText';

const rootReducer = combineReducers({ userManagement, config });
export function* rootSaga() {
  yield all([loginWatcherSaga()]);
}

export default rootReducer;
