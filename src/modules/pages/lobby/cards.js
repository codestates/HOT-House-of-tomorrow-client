import { takeLatest, call, put } from 'redux-saga/effects';
import { createRequestActionTypes } from '../../../api/createRequestSaga';
import * as getCardApi from '../../../api/pages/lobby/cards';

//* CREATE_REQUEST_ACTION_TYPES
const [GET_FILTER_CARDS, SUCCESS, FAILURE] = createRequestActionTypes(
  'GET_FILTER_CARDS'
);

//* GENERATE_TYPE_FUNCTION
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
export function* getCardSaga(action) {
  try {
    const result = yield call(getCardApi.getCardsAsync, action.payload);
    yield put({
      type: SUCCESS,
      payload: {
        query: result.query,
        queryTab: result.currentTab,
        currentQueryTab: result.currentQueryTab,
        currentQuery: result.currentQuery,
      },
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      payload: e,
    });
  }
}

//* WATCHER_SAGA_FUNCTION
export function* getCardWatcherSaga() {
  yield takeLatest(GET_FILTER_CARDS, getCardSaga);
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
    case SUCCESS:
      return {
        ...state,
        cards: action.payload,
        currentQuery: action.payload.currentQuery,
        currentQueryTab: action.payload.currentQueryTab,
        query: action.payload.query,
      };
    case FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
