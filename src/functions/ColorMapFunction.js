const colorLayer = (key) => {
  switch (true) {
    case key === undefined:
      return "Gray";
    case key > 1 && key <= 1000:
      return "#3db657";
    case key > 1000 && key <= 10000:
      return "#ccd629";
    case key > 10000 && key <= 100000:
      return "#ffd701";
    case key > 100000 && key <= 500000:
      return "#f99e32";
    case key > 500000 && key <= 1000000:
      return "#f7913c";
    case key > 1000000 && key <= 5000000:
      return "#e76d0a";
    case key > 5000000 && key <= 10000000:
      return "#df430f";
    case key > 10000000 && key <= 30000000:
      return "#de2f10";
    case key > 30000000:
      return "#d21313";
    default:
      return;
  }
};
export { colorLayer };
