import { combineReducers } from "redux";
import covidReducer from "./covid";
import uiReducer from "./ui";
const rootReducer = combineReducers({
  coviData: covidReducer,
  uiOptions: uiReducer,
});
export default rootReducer;
