import { SET_UI } from "../actions/ui";
const initialState = {
  ShowVarChart: false,
  ChangeChart: false,
  selectLines: 1,
  mobileMenu: "-51%",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default uiReducer;
