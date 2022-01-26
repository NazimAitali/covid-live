import {
  GiEarthAfricaEurope,
  GiEarthAmerica,
  GiEarthAsiaOceania,
} from "react-icons/gi";
import { SET_UI } from "../../redux/actions/ui";

let InfectedColor = "#002855";
let RecoveredColor = "#004b1e";
let DeathsColor = "#4e0000";
let vaccination = "#25685e";
let testsPerOneMillion = "#55967e";
let casesPerOneMillion = "#4ea1d3";
let deathsPerOneMillion = "#a6172d";
let matched = window.matchMedia("(prefers-color-scheme: light)").matches;

if (matched) {
  InfectedColor = "#2b5792";
  RecoveredColor = "#378353";
  DeathsColor = "#913938";
  vaccination = "#41d3bd";
  testsPerOneMillion = "#55967e";
  casesPerOneMillion = "#4ea1d3";
  deathsPerOneMillion = "#a6172d";
}

const continentDisplay = (covid) => {
  const continent = {
    Africa: <GiEarthAfricaEurope />,
    Europe: <GiEarthAfricaEurope />,
    Asia: <GiEarthAsiaOceania />,
    "Australia-Oceania": <GiEarthAsiaOceania />,
    "North America": <GiEarthAmerica />,
    "South America": <GiEarthAmerica />,
  };
  return continent[covid];
};
const ShowVaccination = (dispatch, ShowVarChart) => {
  dispatch({
    type: SET_UI,
    payload: {
      ShowVarChart: ShowVarChart ? false : true,
    },
  });
};

const changeCharts = (dispatch, ChangeChart) => {
  dispatch({
    type: SET_UI,
    payload: {
      ChangeChart: ChangeChart ? false : true,
    },
  });
};

const nextline = (dispatch, selectLines) => {
  dispatch({
    type: SET_UI,
    payload: {
      selectLines: selectLines < 3 ? selectLines + 1 : selectLines,
    },
  });
};
const previousline = (dispatch, selectLines) => {
  dispatch({
    type: SET_UI,
    payload: {
      selectLines: selectLines > 1 ? selectLines - 1 : selectLines,
    },
  });
};

const request = (data, display, countryResearch, localisation) => {
  switch (true) {
    case display === "casesPerOneMillion":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch
                ? today.casesPerOneMillion
                : null
            )
          : [0]
      ).filter((el) => el !== null);

    case display === "deathsPerOneMillion":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch
                ? today.deathsPerOneMillion
                : null
            )
          : [0]
      ).filter((el) => el !== null);
    case display === "testsPerOneMillion":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch
                ? today.testsPerOneMillion
                : null
            )
          : [0]
      ).filter((el) => el !== null);
    case display === "todayCases":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch ? today.todayCases : null
            )
          : [0]
      ).filter((el) => el !== null);

    case display === "todayRecovered":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch ? today.todayRecovered : null
            )
          : [0]
      ).filter((el) => el !== null);

    case display === "todayDeaths":
      return (
        data
          ? data.map((today) =>
              today.country === countryResearch ? today.todayDeaths : null
            )
          : [0]
      ).filter((el) => el !== null);
    default:
      break;
  }
};

const dataSets = (
  Cases,
  Recovered,
  Deaths,
  fetchVaccination,
  covid19Data,
  covid19DataYesterday,
  search,
  localisation
) => {
  return [
    {
      // details chart barre Data [0]
      label: "Total Infected",
      data: Cases,
      backgroundColor: InfectedColor,
    },
    {
      // details chart barre Data [1]
      label: "Total Recovered",
      data: Recovered,
      backgroundColor: RecoveredColor,
    },
    {
      // details chart barre Data [2]
      label: "Total Deaths",
      data: Deaths,
      backgroundColor: DeathsColor,
    },
    {
      // details chart line Data [3]
      label: "Total Infected",
      data: Cases,
      lineTension: 0,
      fill: false,
      borderColor: InfectedColor,
    },
    {
      // details chart line Data [4]
      label: "Total Recovered",
      data: Recovered,
      lineTension: 0,
      fill: false,
      borderColor: RecoveredColor,
    },
    {
      // details chart line Data [5]
      label: "Total Deaths",
      data: Deaths,
      lineTension: 0,
      fill: false,
      borderColor: DeathsColor,
    },
    {
      // Vaccination chart line Data [6]
      label: `Nombre total de doses administrées`,
      data: fetchVaccination,
      fill: false,
      backgroundColor: vaccination,
      borderColor: vaccination,
    },
    {
      // per million chart barre Data [7]
      label: "per/million",
      data: [
        Number(request(covid19Data, "testsPerOneMillion", search)),
        Number(request(covid19Data, "casesPerOneMillion", search)),
        Number(request(covid19Data, "deathsPerOneMillion", search)),
      ],
      backgroundColor: [
        testsPerOneMillion,
        casesPerOneMillion,
        deathsPerOneMillion,
      ],
      borderColor: ["whitesmoke"],
      borderWidth: 0.5,
      datalabels: {
        color: "yellow",
      },
    },

    {
      //  chart pie Data [8]
      steppedLine: false,
      showLine: true,
      pointBackgroundColor: "red",
      label: "Today Situation",
      data: [
        Number(request(covid19Data, "todayCases", search, localisation)) === 0
          ? Number(
              request(covid19DataYesterday, "todayCases", search, localisation)
            )
          : Number(request(covid19Data, "todayCases", search, localisation)),
        Number(request(covid19Data, "todayRecovered", search, localisation)) ===
        0
          ? Number(
              request(
                covid19DataYesterday,
                "todayRecovered",
                search,
                localisation
              )
            )
          : Number(
              request(covid19Data, "todayRecovered", search, localisation)
            ),
        Number(request(covid19Data, "todayDeaths", search, localisation)) === 0
          ? Number(
              request(covid19DataYesterday, "todayDeaths", search, localisation)
            )
          : Number(request(covid19Data, "todayDeaths", search, localisation)),
      ],

      backgroundColor: [InfectedColor, RecoveredColor, DeathsColor],
      hoverOffset: 2,
      borderWidth: 0.5,
      borderColor: "whitesmoke",
      hoverBorderWidth: 1,
    },
  ];
};

const options = () => {
  return [
    {
      // details chart line options [0]
      aspectRatio: 1,
      responsive: true,
      animation: false,
      legend: {
        display: true,
        position: "top",
      },
      scales: {
        A: {
          type: "linear",
          display: true,
          position: "left",
        },
        B: {
          type: "linear",
          display: true,
          position: "right",
        },
        C: {
          type: "linear",
          display: true,
          position: "left",
        },
      },
    },
    {
      // details chart Line options [1]
      aspectRatio: 1,
      maintainAspectRatio: false,
      responsive: true,
      animation: false,
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
    {
      // per million chart barre options [2]
      aspectRatio: 1,
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        y: {
          ticks: {
            color: "#fffff3",
          },
        },
        x: {
          ticks: {
            color: "#fffff3",
          },
        },
      },
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: false,
        title: {
          display: true,
          text: "Per Million",
          color: "#fffff3",
        },
      },
      animation: false,
    },
    {
      // pie barre options [3]
      aspectRatio: 1,
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        animateRotate: false,
      },
      labels: {
        color: "red",
      },
      plugins: {
        legend: {
          labels: {
            color: "#fffff3",
          },
        },
        title: {
          display: true,
          text: "Today Cases",
          color: "#fffff3",
        },
      },
    },
  ];
};
export {
  ShowVaccination,
  changeCharts,
  nextline,
  previousline,
  dataSets,
  options,
  continentDisplay,
};
