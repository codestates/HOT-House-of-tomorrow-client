import { takeLatest, call, put } from 'redux-saga/effects';
import * as getCardApi from '../../../api/pages/lobby/cards';

//* CREATE_REQUEST_ACTION_TYPES

// * GET_FILTER_CARDS
const GET_ALL_CARDS = 'cards/GET_ALL_CARDS';
const GET_ALL_CARDS_SUCCESS = 'cards/GET_ALL_CARDS';
const GET_ALL_CARDS_FAILURE = 'cards/GET_ALL_CARDS';

// * GET_FILTER_CARDS
const GET_FILTER_CARDS = 'cards/GET_FILTER_CARDS';
const GET_FILTER_CARDS_SUCCESS = 'cards/GET_FILTER_CARDS';
const GET_FILTER_CARDS_FAILURE = 'cards/GET_FILTER_CARDS';

//* GENERATE_TYPE_FUNCTION
export const typeAllCards = () => ({
  type: GET_ALL_CARDS,
});

export const typeGetFilterCards = (
  currentTab,
  option,
  currentQuery,
  currentQueryTab
) => ({
  type: GET_FILTER_CARDS,
  payload: { currentTab, option, currentQuery, currentQueryTab },
});

//* MAIN_SAGA_FUNCTION
export function* getAllCardSaga(action) {
  try {
    const result = yield call(getCardApi.getCardsAsync, action.payload);
    yield put({
      type: GET_ALL_CARDS_SUCCESS,
      payload: {
        query: result.query,
        queryTab: result.currentTab,
        currentQueryTab: result.currentQueryTab,
        currentQuery: result.currentQuery,
      },
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
    const result = yield call(getCardApi.getCardsAsync, action.payload);
    yield put({
      type: GET_FILTER_CARDS_SUCCESS,
      payload: {
        query: result.query,
        queryTab: result.currentTab,
        currentQueryTab: result.currentQueryTab,
        currentQuery: result.currentQuery,
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
export function* getAllCardWatcherSaga() {
  yield takeLatest(GET_ALL_CARDS, getAllCardSaga);
}
export function* getFilteredCardWatcherSaga() {
  yield takeLatest(GET_FILTER_CARDS, getFilteredCardSaga);
}

const initialState = {
  cards: [],
  query: '',
  currentQuery: {},
  currentQueryTab: [],
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
        cards: action.payload,
        currentQuery: action.payload.currentQuery,
        currentQueryTab: action.payload.currentQueryTab,
        query: action.payload.query,
      };
    case GET_FILTER_CARDS_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
