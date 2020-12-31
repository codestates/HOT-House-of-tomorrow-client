import { takeLatest, call, put } from 'redux-saga/effects';
import * as cardDetailApi from '../../../api/pages/post/cardDetail';

//* CREATE_REQUEST_ACTION_TYPES

// * GET_FILTER_CARDS
const POST_COMMENT = 'cards/POST_COMMENT';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';

const DELETE_COMMENT = 'cards/DELETE_COMMENT';
const DELETE_COMMENT_SUCCESS = 'cards/DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_FAILURE = 'cards/DELETE_COMMENT_FAILURE';

const LIKE_POST = 'cards/LIKE_POST';
const LIKE_POST_SUCCESS = 'cards/LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'cards/LIKE_POST_FAILURE';

//* GENERATE_TYPE_FUNCTION

export const typePostComment = (obj) => ({
  type: POST_COMMENT,
  payload: obj,
});

export const typeDeleteComment = (obj) => ({
  type: DELETE_COMMENT,
  payload: obj,
});

export const typeLikePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});

//* MAIN_SAGA_FUNCTION

export function* postCommentSaga(action) {
  try {
    const result = yield call(cardDetailApi.postCommentAsync, action.payload);
    yield put({
      type: POST_COMMENT_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (e) {
    yield put({
      type: POST_COMMENT_FAILURE,
      payload: e,
    });
  }
}

export function* deleteCommentSaga(action) {
  try {
    const result = yield call(cardDetailApi.deleteCommentAsync, action.payload);
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      payload: {
        result: result.deleteComment,
      },
    });
  } catch (e) {
    yield put({
      type: DELETE_COMMENT_FAILURE,
      payload: e,
    });
  }
}

export function* likePostSaga(action) {
  try {
    const result = yield call(cardDetailApi.likePostAsync, action.payload);
    yield put({
      type: LIKE_POST_SUCCESS,
      payload: {
        result: result.updateSuccess,
      },
    });
  } catch (e) {
    yield put({
      type: LIKE_POST_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* postCommentWatcherSaga() {
  yield takeLatest(POST_COMMENT, postCommentSaga);
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
  yield takeLatest(LIKE_POST, likePostSaga);
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
        result: action.payload.result.writeComment,
        commentId: action.payload.result.commentId,
      };
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
      };

    case DELETE_COMMENT:
      return {
        ...state,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
      };

    case LIKE_POST:
      return {
        ...state,
      };
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        likeResult: action.payload.result,
      };
    case LIKE_POST_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
