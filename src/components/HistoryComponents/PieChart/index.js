import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
const PieChart = () => {
  const { localisation, countryResearch, covid19Data, covid19DataYesterday } =
    useSelector((state) => state.coviData);

  const dataCases = (
    covid19Data 
      ? covid19Data.map((covid) =>
          covid.country ===
          (countryResearch ? countryResearch : localisation.country)
            ? covid.todayCases === 0
              ? covid19DataYesterday
                ? covid19DataYesterday.map((yest) =>
                    yest.country ===
                    (countryResearch ? countryResearch : localisation.country)
                      ? yest.todayCases
                      : null
                  )
                : null
              : covid.todayCases
            : null
        )
      : [1]
  )

    .map((result) => result)
    .filter((cases) => cases !== null);

  console.log(dataCases);

  const dataRecovered = (
    covid19Data
      ? covid19Data.map((covid) =>
          covid.country ===
          (countryResearch ? countryResearch : localisation.country)
            ? covid.todayRecovered === 0
              ? covid19DataYesterday
                ? covid19DataYesterday.map((yest) =>
                    yest.country ===
                    (countryResearch ? countryResearch : localisation.country)
                      ? yest.todayRecovered
                      : null
                  )
                : null
              : covid.todayRecovered
            : null
        )
      : [1]
  )
    .map((result) => result)
    .filter((recovered) => recovered !== null);

  const dataDeaths = (
    covid19Data
      ? covid19Data.map((covid) =>
          covid.country ===
          (countryResearch ? countryResearch : localisation.country)
            ? covid.todayDeaths === 0
              ? covid19DataYesterday
                ? covid19DataYesterday.map((yest) =>
                    yest.country ===
                    (countryResearch ? countryResearch : localisation.country)
                      ? yest.todayDeaths
                      : null
                  )
                : null
              : covid.todayDeaths
            : null
        )
      : [1]
  )
    .map((result) => result)
    .filter((deaths) => deaths !== null);

  const dataDonut = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        steppedLine: false,
        showLine: true,
        pointBackgroundColor: "red",
        label: "Today Situation",
        data: [dataCases?dataCases:1, dataRecovered?dataRecovered:1, dataDeaths?dataDeaths:1],
        backgroundColor: ["#041C37", "#05461F", "#460505"],
        hoverOffset: 2,
        borderWidth: 1,
        borderColor: "whitesmoke",
        hoverBorderWidth: 3,
      },
    ],
  };
  const optionsPie = {
    animation: {
      animateRotate: false,
    },
    plugins: {
      title: {
        display: true,
        text: "Today Cases",
      },
    },
  };

  return (
    <div className="History-pie-content">
      {dataCases === 1 && dataRecovered === 1 && dataDeaths === 1 ? (
        <div>No Data yet or all category equal 0</div>
      ) : (
        <Pie data={dataDonut} options={optionsPie} />
      )}
    </div>
  );
};

export default PieChart;
