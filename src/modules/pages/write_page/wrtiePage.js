import { call, put, takeLatest } from 'redux-saga/effects';
import * as writePageApi from '../../../api/pages/write_page/writePage';

//* CREATE_REQUEST_ACTION_TYPES

//* POST_WRITE_CARD
const POST_WRITE_CARD = 'write_page/POST_WRITE_CARD';
const POST_WRITE_CARD_SUCCESS = 'write_page/POST_WRITE_CARD_SUCCESS';
const POST_WRITE_CARD_FAILURE = 'write_page/POST_WRITE_CARD_FAILURE';

//* POST_UPLOAD_IMAGE
const POST_UPLOAD_IMAGE = 'write_page/POST_UPLOAD_IMAGE';
const POST_UPLOAD_IMAGE_SUCCESS = 'write_page/POST_UPLOAD_IMAGE_SUCCESS';
const POST_UPLOAD_IMAGE_FAILURE = 'write_page/POST_UPLOAD_IMAGE_FAILURE';

//* INIT_UPLOAD_IMAGE
const INIT_UPLOAD_CARD = 'write_page/INIT_UPLOAD_CARD';

//* GENERATE_TYPE_FUNCTION
export const typeWriteCard = (formData) => ({
  type: POST_WRITE_CARD,
  payload: formData,
});

export const typeUploadImage = (imgForm) => ({
  type: POST_UPLOAD_IMAGE,
  payload: imgForm,
});

export const typeInitUploadCard = () => ({
  type: INIT_UPLOAD_CARD,
});

//* MAIN_SAGA_FUNCTION
export function* writeCardSaga(action) {
  try {
    const result = yield call(writePageApi.writeCardAsync, action.payload);
    yield put({
      type: POST_WRITE_CARD_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: POST_WRITE_CARD_FAILURE,
      payload: e,
    });
  }
}

export function* uploadImageSaga(action) {
  try {
    const result = yield call(writePageApi.uploadImageAsync, action.payload);
    yield put({
      type: POST_UPLOAD_IMAGE_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: POST_UPLOAD_IMAGE_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* writeCardWatcherSaga() {
  yield takeLatest(POST_WRITE_CARD, writeCardSaga);
  yield takeLatest(POST_UPLOAD_IMAGE, uploadImageSaga);
}

const initialState = {
  url: '',
  uploadCard: {
    postId: null,
  },
};

//* REDUCER
export default function writeCard(state = initialState, action) {
  switch (action.type) {
    //* =====================
    //*   GET_USER_CARDS
    //* =====================
    case POST_WRITE_CARD:
      return {
        ...state,
      };
    case POST_WRITE_CARD_SUCCESS:
      return {
        ...state,
        uploadCard: action.payload,
      };
    case POST_WRITE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload.getLikePost,
      };

    case POST_UPLOAD_IMAGE:
      return {
        ...state,
      };
    case POST_UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        url: action.payload.imageUrl,
      };
    case POST_UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case INIT_UPLOAD_CARD:
      return {
        ...state,
        url: '',
        uploadCard: {
          postId: null,
        },
      };

    default:
      return state;
  }
}
