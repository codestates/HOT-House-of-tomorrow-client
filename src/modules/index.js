import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authorization, { userAuthorizationSaga } from './auth/userAuthorization';
import cards, { getCardWatcherSaga } from './pages/lobby/cards';
import cardDetail, { postCommentWatcherSaga } from './pages/post/cardDetail';
import userPage, { getUserCardsWatcherSaga } from './pages/user_page/userPage';
import writeCard, { writeCardWatcherSaga } from './pages/write_page/wrtiePage';
import userEdit, { userInfoSaga } from './pages/edit/userEdit';
import config from './config/filterTabText';

const rootReducer = combineReducers({
  authorization,
  config,
  cards,
  cardDetail,
  userPage,
  writeCard,
  userEdit,
});
export function* rootSaga() {
  yield all([
    userAuthorizationSaga(),
    getCardWatcherSaga(),
    postCommentWatcherSaga(),
    getUserCardsWatcherSaga(),
    writeCardWatcherSaga(),
    userInfoSaga(),
  ]);
}

export default rootReducer;
