import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, {
  loginWatcherSaga,
  authWatcherSaga,
  logOutWatcherSaga,
} from './auth/userAuthorization';
import cards, {
  getAllCardWatcherSaga,
  getFilteredCardWatcherSaga,
} from './pages/lobby/cards';
import config from './config/filterTabText';

const rootReducer = combineReducers({ authorization, config, cards });
export function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    authWatcherSaga(),
    logOutWatcherSaga(),
    getAllCardWatcherSaga(),
    getFilteredCardWatcherSaga(),
  ]);
}

export default rootReducer;
