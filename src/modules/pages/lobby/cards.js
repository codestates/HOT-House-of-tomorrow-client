import { takeLatest, call, put } from 'redux-saga/effects';
import * as getCardApi from '../../../api/pages/lobby/cards';

//* CREATE_REQUEST_ACTION_TYPES

// * GET_FILTER_CARDS
const GET_ALL_CARDS = 'cards/GET_ALL_CARDS';
const GET_ALL_CARDS_SUCCESS = 'cards/GET_ALL_CARDS_SUCCESS';
const GET_ALL_CARDS_FAILURE = 'cards/GET_ALL_CARDS_FAILURE';

// * GET_FILTER_CARDS
const GET_FILTER_CARDS = 'cards/GET_FILTER_CARDS_CARDS';
const GET_FILTER_CARDS_SUCCESS = 'cards/GET_FILTER_CARDSCARDS_SUCCESS';
const GET_FILTER_CARDS_FAILURE = 'cards/GET_FILTER_CARDS_FAILURE';

//* GENERATE_TYPE_FUNCTION
export const typeGetAllCards = () => ({
  type: GET_ALL_CARDS,
});

export const typeGetFilterCards = (
  currentTab,
  option,
  currentQuery,
  currentQueryTab,
  currentTag,
  tag
) => ({
  type: GET_FILTER_CARDS,
  payload: {
    currentTab,
    option,
    currentQuery,
    currentQueryTab,
    currentTag,
    tag,
  },
});

//* MAIN_SAGA_FUNCTION
export function* getAllCardSaga() {
  try {
    const response = yield call(getCardApi.getAllCardsAsync);
    yield put({
      type: GET_ALL_CARDS_SUCCESS,
      payload: response,
    });
  } catch (e) {
    yield put({
      type: GET_ALL_CARDS_FAILURE,
      payload: e,
    });
  }
}

export function* getFilteredCardSaga(action) {
  try {
    const result = yield call(getCardApi.getFilterdCardsAsync, action.payload);
    yield put({
      type: GET_FILTER_CARDS_SUCCESS,
      payload: {
        query: result.query,
        queryTab: result.currentTab,
        currentQueryTab: result.currentQueryTab,
        currentQuery: result.currentQuery,
        currentTag: result.currentTag,
      },
    });
  } catch (e) {
    yield put({
      type: GET_FILTER_CARDS_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* getCardWatcherSaga() {
  yield takeLatest(GET_ALL_CARDS, getAllCardSaga);
  yield takeLatest(GET_FILTER_CARDS, getFilteredCardSaga);
}

const initialState = {
  currentCards: [],
  query: '',
  currentQuery: {},
  currentQueryTab: [],
  currentTag: {},
};

//* REDUCER
export default function cards(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_CARDS:
      return {
        ...state,
      };
    case GET_FILTER_CARDS_SUCCESS:
      return {
        ...state,
        currentQuery: action.payload.currentQuery,
        currentQueryTab: action.payload.currentQueryTab,
        query: action.payload.query,
        currentTag: action.payload.currentTag,
      };
    case GET_FILTER_CARDS_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };

    case GET_ALL_CARDS:
      return {
        ...state,
      };
    case GET_ALL_CARDS_SUCCESS:
      return {
        ...state,
        currentCards: action.payload,
      };
    case GET_ALL_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
