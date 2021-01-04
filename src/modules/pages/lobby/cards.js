import { takeLatest, call, put } from 'redux-saga/effects';
import * as getCardApi from '../../../api/pages/lobby/cards';

//* CREATE_REQUEST_ACTION_TYPES

// * GET_FILTER_CARDS
const GET_ALL_CARDS = 'cards/GET_ALL_CARDS';
const GET_ALL_CARDS_SUCCESS = 'cards/GET_ALL_CARDS_SUCCESS';
const GET_ALL_CARDS_FAILURE = 'cards/GET_ALL_CARDS_FAILURE';

// * GET_FILTER_CARDS
const GET_FILTER_CARDS = 'cards/GET_FILTER_CARDS';
const GET_FILTER_CARDS_SUCCESS = 'cards/GET_FILTER_CARDS_SUCCESS';
const GET_FILTER_CARDS_FAILURE = 'cards/GET_FILTER_CARDS_FAILURE';

// * GET_FILTER_CARDS
const GET_CARD = 'cards/GET_CARD';
const GET_CARD_SUCCESS = 'cards/GET_CARD_SUCCESS';
const GET_CARD_FAILURE = 'cards/GET_CARD_FAILURE';

// * INITAIAL_CARDS
const INITAIAL_CARDS = 'cards/INITAIAL_CARDS';

// * INITAIAL_CARD
const INITAIAL_CARD = 'cards/INITAIAL_CARD';

// * INITAIAL_TAG
const INITAIAL_TAG = 'cards/INITAIAL_TAG';

//* GENERATE_TYPE_FUNCTION
export const typeGetAllCards = () => ({
  type: GET_ALL_CARDS,
});

export const typeInitalTag = () => ({
  type: INITAIAL_TAG,
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

export const typeGetCard = (postId) => ({
  type: GET_CARD,
  payload: postId,
});

export const typeInitialCards = () => ({
  type: INITAIAL_CARDS,
});

export const typeInitialCard = () => ({
  type: INITAIAL_CARD,
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
        cards: result.cards,
      },
    });
  } catch (e) {
    yield put({
      type: GET_FILTER_CARDS_FAILURE,
      payload: e,
    });
  }
}
export function* getCardSaga(action) {
  try {
    const result = yield call(getCardApi.getCardAsync, action.payload);
    yield put({
      type: GET_CARD_SUCCESS,
      payload: {
        card: result,
      },
    });
  } catch (e) {
    yield put({
      type: GET_CARD_FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* getCardWatcherSaga() {
  yield takeLatest(GET_ALL_CARDS, getAllCardSaga);
  yield takeLatest(GET_FILTER_CARDS, getFilteredCardSaga);
  yield takeLatest(GET_CARD, getCardSaga);
}

const initialState = {
  currentCards: [],
  query: '',
  currentQuery: {},
  currentQueryTab: [],
  currentTag: {},
  load: null,
  card: {
    postData: {
      housingType: null,
      space: null,
      acreage: null,
      color: null,
    },
    comment: [],
  },
};

//* REDUCER
export default function cards(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_CARDS:
      return {
        ...state,
        load: false,
      };
    case GET_FILTER_CARDS_SUCCESS:
      return {
        ...state,
        currentQuery: action.payload.currentQuery,
        currentQueryTab: action.payload.currentQueryTab,
        query: action.payload.query,
        currentTag: action.payload.currentTag,
        currentCards: action.payload.cards,
        load: true,
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
        load: false,
      };
    case GET_ALL_CARDS_SUCCESS:
      return {
        ...state,
        currentCards: action.payload,
        load: true,
      };
    case GET_ALL_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    case INITAIAL_CARDS:
      return {
        ...state,
        currentCards: [],
        query: '',
        currentQuery: {},
        currentQueryTab: [],
        currentTag: {},
        card: {
          postData: {
            housingType: null,
            space: null,
            acreage: null,
            color: null,
          },
          comment: [],
        },
      };
    case INITAIAL_CARD:
      return {
        ...state,
        card: {
          postData: {
            housingType: null,
            space: null,
            acreage: null,
            color: null,
          },
          comment: [],
        },
      };

    case GET_CARD:
      return {
        ...state,
        load: false,
      };
    case GET_CARD_SUCCESS:
      return {
        ...state,
        card: action.payload.card,
      };
    case GET_CARD_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };

    case INITAIAL_TAG:
      return {
        ...state,
        currentTag: {},
      };
    default:
      return state;
  }
}
