//* CREATE_REQUEST_ACTION_TYPES
const CHANGE_TAB = 'CHANGE_TAB';

//* GENERATE_TYPE_FUNCTION
export const typeChangeTab = (currentTab) => ({
  type: CHANGE_TAB,
  payload: currentTab,
});

//* REDUCER
export default function config(state = {}, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };

    default:
      return state;
  }
}
