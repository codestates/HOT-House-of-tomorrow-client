//* CREATE_REQUEST_ACTION_TYPES
const CHANGE_TAB = 'CHANGE_TAB';

//* GENERATE_TYPE_FUNCTION
export const typeChangeTab = (currentTab, area) => ({
  type: CHANGE_TAB,
  payload: { currentTab, area },
});

//* REDUCER
export default function config(state = {}, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        currentTab: action.payload.currentTab,
        currentTabArea: action.payload.area,
      };

    default:
      return state;
  }
}
