import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, {
  loginWatcherSaga,
  authWatcherSaga,
} from './auth/userAuthorization';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import config from './config/filterTabText';
import modal from './modal';

const rootReducer = combineReducers({ authorization, config, cards, modal });
export function* rootSaga() {
  yield all([loginWatcherSaga(), authWatcherSaga(), getCardWatcherSaga()]);
}

export default rootReducer;
