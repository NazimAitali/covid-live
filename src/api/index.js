import axios from "axios";
import { SET_COVID } from "../redux/actions/covid";

const url = "https://disease.sh/v3/covid-19";

const getDataToday = async (dispatch) => {
  try {
    const response = await axios.get(`${url}/countries?yesterday=false`);
    if (!response || response.status !== 200) {
      console.log("no data");
    }
    dispatch({
      type: SET_COVID,
      payload: {
        covid19Data: response.data,
        loadercovid: false,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getDataYesterday = async (dispatch) => {
  try {
    const response = await axios.get(`${url}/countries?yesterday=true`);
    if (!response || response.status !== 200) {
      console.log("no data");
    }
    dispatch({
      type: SET_COVID,
      payload: {
        covid19DataYesterday: response.data,
        loadercovid: false,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getAll = async (dispatch) => {
  try {
    const response = await axios.get(`${url}/all?yesterday=true`);
    if (!response || response.status !== 200) {
      console.log("no data");
    }

    dispatch({
      type: SET_COVID,
      payload: {
        covid19All: response.data,
        loaderGetAll: false,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getlocalisation = async (dispatch) => {
  try {
    const response = await axios.get("https://extreme-ip-lookup.com/json/");
    if (!response || response.status !== 200) {
      console.log("no data");
    }

    dispatch({
      type: SET_COVID,
      payload: {
        localisation: response.data,
        localisationLoder: false,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { getDataYesterday, getAll, getlocalisation, getDataToday };
