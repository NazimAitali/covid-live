import { SET_COVID } from "../actions/covid";
const initialState = {
  covid19Data: null,
  covid19DataYesterday: null,
  historiqueData: null,
  fetchVaccination: null,
  geoJson: null,
  localisation: false,
  listDisplay: "cases",
  sortDisplay: "up",
  countryResearch: false,
  loaderjson: true,
  loadercovid: true,
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
