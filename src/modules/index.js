import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userManagement, { loginWatcherSaga } from './auth/userManagement';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import config from './config/filterTabText';

const rootReducer = combineReducers({ userManagement, config, cards });
export function* rootSaga() {
  yield all([loginWatcherSaga(), getCardWatcherSaga()]);
}

export default rootReducer;
