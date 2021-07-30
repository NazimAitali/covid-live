import { SET_UI } from "../actions/ui";
const initialState = {};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default uiReducer;
