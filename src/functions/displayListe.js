const displayList = (listDisplay, covid) => {
  switch (true) {
    case listDisplay === "cases":
      return covid.cases;
    case listDisplay === "todayCases":
      return covid.todayCases;
    case listDisplay === "deaths":
      return covid.deaths;
    case listDisplay === "todayDeaths":
      return covid.todayDeaths;
    case listDisplay === "recovered":
      return covid.recovered;
    case listDisplay === "todayRecovered":
      return covid.todayRecovered;
    default:
      return null;
  }
};
const sort = (sortDisplay, listDisplay) => {
  switch (true) {
    case sortDisplay === "up" && listDisplay === "cases":
      return (a, b) => b.cases - a.cases;
    case sortDisplay === "up" && listDisplay === "todayCases":
      return (a, b) => b.todayCases - a.todayCases;
    case sortDisplay === "up" && listDisplay === "deaths":
      return (a, b) => b.deaths - a.deaths;
    case sortDisplay === "up" && listDisplay === "todayDeaths":
      return (a, b) => b.todayDeaths - a.todayDeaths;
    case sortDisplay === "up" && listDisplay === "recovered":
      return (a, b) => b.recovered - a.recovered;
    case sortDisplay === "up" && listDisplay === "todayRecovered":
      return (a, b) => b.todayRecovered - a.todayRecovered;

    case sortDisplay === "down" && listDisplay === "cases":
      return (a, b) => a.cases - b.cases;
    case sortDisplay === "down" && listDisplay === "todayCases":
      return (a, b) => a.todayCases - b.todayCases;
    case sortDisplay === "down" && listDisplay === "deaths":
      return (a, b) => a.deaths - b.deaths;
    case sortDisplay === "down" && listDisplay === "todayDeaths":
      return (a, b) => a.todayDeaths - b.todayDeaths;
    case sortDisplay === "down" && listDisplay === "recovered":
      return (a, b) => a.recovered - b.recovered;
    case sortDisplay === "down" && listDisplay === "todayRecovered":
      return (a, b) => a.todayRecovered - b.todayRecovered;

    case sortDisplay === "apha":
      return (a, b) => a.country.localeCompare(b.country);
    default:
      return null;
  }
};

export { displayList, sort };
