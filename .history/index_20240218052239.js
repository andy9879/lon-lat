// coordinateConverter.js

function dmsToDecimal(degrees, minutes, seconds, direction) {
  let decimal = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    decimal = -decimal;
  }
  return decimal;
}

function decimalToDMS(decimal) {
  const degrees = Math.floor(Math.abs(decimal));
  const minutes = Math.floor((Math.abs(decimal) - degrees) * 60);
  const seconds = ((Math.abs(decimal) - degrees - minutes / 60) * 3600).toFixed(
    2
  );

  const direction = decimal >= 0 ? (decimal === 0 ? "" : "N") : "S";

  return {
    degrees,
    minutes,
    seconds,
    direction,
  };
}

module.exports = {
  dmsToDecimal,
  decimalToDMS,
};
