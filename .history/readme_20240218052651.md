# lonLat

A Node.js module for converting between decimal coordinates and degrees/minutes/seconds (DMS) for latitude and longitude.

## Installation

```bash
npm install coordinate-converter
```

## Usage

```javascript
const lonLat = require("lon-lat");

// Convert DMS to Decimal
const latitudeDecimal = lonLat.dmsToDecimal(37, 30, 0, "N");
const longitudeDecimal = lonLat.dmsToDecimal(122, 15, 0, "W");

console.log("Latitude (Decimal):", latitudeDecimal);
console.log("Longitude (Decimal):", longitudeDecimal);

// Convert Decimal to DMS
const latitudeDMS = lonLat.decimalToDMS(latitudeDecimal);
const longitudeDMS = lonLat.decimalToDMS(longitudeDecimal);

console.log("Latitude (DMS):", latitudeDMS);
console.log("Longitude (DMS):", longitudeDMS);
```
