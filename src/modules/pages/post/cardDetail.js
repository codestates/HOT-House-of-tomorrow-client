import { takeLatest, call, put } from 'redux-saga/effects';
import * as cardDetailApi from '../../../api/pages/post/cardDetail';

//* CREATE_REQUEST_ACTION_TYPES

// * GET_FILTER_CARDS
const POST_COMMENT = 'cards/POST_COMMENT';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';

//* GENERATE_TYPE_FUNCTION

export const typePostComment = (obj) => ({
  type: POST_COMMENT,
  payload: obj,
});

//* MAIN_SAGA_FUNCTION

export function* postCommentSaga(action) {
  try {
    const result = yield call(cardDetailApi.postCommentAsync, action.payload);
    yield put({
      type: POST_COMMENT_SUCCESS,
      payload: {
        result: result.writeComment,
      },
    });
  } catch (e) {
    yield put({
      type: POST_COMMENT_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* postCommentWatcherSaga() {
  yield takeLatest(POST_COMMENT, postCommentSaga);
}

//* REDUCER
export default function cardDetail(state = {}, action) {
  switch (action.type) {
    case POST_COMMENT:
      return {
        ...state,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
      };
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
