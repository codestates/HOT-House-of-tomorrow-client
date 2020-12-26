import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, {
  loginWatcherSaga,
  authWatcherSaga,
  logOutWatcherSaga,
} from './auth/userAuthorization';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import config from './config/filterTabText';
import modal from './config/dropDownMenu';

const rootReducer = combineReducers({ authorization, config, cards, modal });
export function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    authWatcherSaga(),
    logOutWatcherSaga(),
    getCardWatcherSaga(),
  ]);
}

export default rootReducer;
