import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, { userAuthorizationSaga } from './auth/userAuthorization';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import cardDetail, { postCommentWatcherSaga } from './pages/post/cardDetail';
import config from './config/filterTabText';

const rootReducer = combineReducers({
  authorization,
  config,
  cards,
  cardDetail,
});
export function* rootSaga() {
  yield all([
    userAuthorizationSaga(),
    getCardWatcherSaga(),
    postCommentWatcherSaga(),
  ]);
}

export default rootReducer;
