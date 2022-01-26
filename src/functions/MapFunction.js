import { colorLayer } from "./ColorMapFunction";

const Cases = (country, layer) => {
  layer.options.fillColor = colorLayer(country.properties.totalCases);
  const contentPopup = `
  <div class="popup-container">
  <div class="popup-top"><h3>${country.properties.ADMIN}
  </h3><img class="flag" src=${country.properties.flag} alt="flag"/>
  </div>
  <div class="popup-data">
  Total Cases : ${country.properties.totalCases}
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
