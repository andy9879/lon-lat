// coordinateConverter.js

function dmsToDecimal(degrees, minutes, seconds) {
  let decimal =
    Math.sign(degrees) * (Math.abs(degrees) + minutes / 60 + seconds / 3600);
  return Number(decimal.toFixed(8));
}

function decimalToDMS(decimal) {
  const degrees = Math.sign(decimal) * Math.floor(Math.abs(decimal));
  const minutes = Math.floor((Math.abs(decimal) - Math.abs(degrees)) * 60);
  const seconds = Number(
    ((Math.abs(decimal) - Math.abs(degrees) - minutes / 60) * 3600).toFixed(2)
  );

  return [degrees, minutes, seconds];
}

module.exports = {
  dmsToDecimal,
  decimalToDMS,
};
