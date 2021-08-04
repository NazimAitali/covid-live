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
const getHistoriqueData = async (dispatch, country) => {
  try {
    const response = await axios.get(
      `${url}/historical/${country}?lastdays=10`
    );
    if (!response || response.status !== 200) {
      console.log("no data");
    }
    dispatch({
      type: SET_COVID,
      payload: {
        historiqueData: response.data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const fetchVaccination = async (dispatch, country) => {
  try {
    const reponse = await axios.get(
      `${url}/vaccine/coverage/countries/${country}?lastdays=10&fullData=false`
    );
    if (!reponse || reponse.status !== 200) {
      console.log("no data");
    }
    dispatch({
      type: SET_COVID,
      payload: {
        fetchVaccination: reponse.data,
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

export {
  getDataYesterday,
  getlocalisation,
  getDataToday,
  getHistoriqueData,
  fetchVaccination,
};
