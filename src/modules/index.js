import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, { userAuthorizationSaga } from './auth/userAuthorization';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import config from './config/filterTabText';

const rootReducer = combineReducers({ authorization, config, cards });
export function* rootSaga() {
  yield all([userAuthorizationSaga(), getCardWatcherSaga()]);
}

export default rootReducer;
