import { SET_COVID } from "../redux/actions/covid";

const pushInMyMap = (covid19Data, geoJson,dispatch) => {
  if (geoJson) {
    geoJson.forEach((country) => {
      const covidCountry = covid19Data.find(
        (covidCountry) =>
          covidCountry.countryInfo.iso3 === country.properties.ISO_A3
      );
      if (covidCountry !== undefined) {
        country.properties.totalCases = covidCountry.cases;
        country.properties.todayCases = covidCountry.todayCases;
        country.properties.totalDeaths = covidCountry.deaths;
        country.properties.todayDeaths = covidCountry.todayDeaths;
        country.properties.totalRecovered = covidCountry.recovered;
        country.properties.todayRecovered = covidCountry.todayRecovered;
        country.properties.teste = covidCountry.tests;
        country.properties.population = covidCountry.population;
        country.properties.flag = covidCountry.countryInfo.flag;
         dispatch({
           type: SET_COVID,
           payload: {
             loaderjson: true,
           },
         });
      }
    });
    console.log("pushed");
  }
};

export { pushInMyMap };
