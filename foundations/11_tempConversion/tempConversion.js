const convertToCelsius = function(fahrenheit) {
  let celsiusPrecise = (5 / 9) * (fahrenheit - 32);
  let celsiusRounded = Math.round(celsiusPrecise * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitPrecise = (9 / 5) * celsius + 32;
  let fahrenheitRounded = Math.round(fahrenheitPrecise * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
