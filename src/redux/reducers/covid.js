import { SET_COVID } from "../actions/covid";
const initialState = {
  covid19Data: null,
  covid19DataYesterday: null,
  covid19All: null,
  listDisplay: "cases",
  sortDisplay: "up",
  countryResearch: false,
  localisation: false,
  loaderjson: false,
  loadercovid: true,
  loaderGetAll: true,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default covidReducer;