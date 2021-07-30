import { colorLayer } from "./colorLayer";

const Cases = (country, layer) => {
  layer.options.fillColor = colorLayer(country.properties.totalCases);
  const contentPopup = `<div class="popup-container">
  <div class="popup-top"><h2>${country.properties.ADMIN}
  </h2><img class="flag" src=${country.properties.flag} alt="flag"/></div>
  <div class="popup-data">
  <div class="popup-data-top">
  <h4>Today</h4>
  <h4>Total</h4>
  </div>
  <div class="popup-data-bottom">
  <div class="item">
  <p>${country.properties.todayCases}</p>
  <h5>Cases</h5>
  <p>${country.properties.totalCases}</p>
  </div>
   <div class="item">
  <p>${country.properties.todayDeaths}</p>
  <h5>Deaths</h5>
  <p>${country.properties.totalDeaths}</p>
  </div>
   <div class="item">
  <p>${country.properties.todayRecovered}</p>
  <h5>Recorvered</h5>
  <p>${country.properties.totalRecovered}</p>
  </div>
  </div>  
  </div>
  </div>`;
  const Options = {
    className: "custom",
    closeButton: true,
    autoPanPaddingTopLeft: [0, 0],
    autoPanPaddingBottomRight: [0, -200],
  };
  layer.bindPopup(contentPopup, Options);
};

export { Cases };
