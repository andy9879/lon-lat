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
const latitudeDecimal = lonLat.dmsToDecimal(37, 30, 43);
const longitudeDecimal = lonLat.dmsToDecimal(-122, 15, 27);

console.log("Latitude (Decimal):", latitudeDecimal); //prints 'Latitude (Decimal): 37.51194444'
console.log("Longitude (Decimal):", longitudeDecimal); //prints 'Longitude (Decimal): -122.2575'

// Convert Decimal to DMS
const latitudeDMS = lonLat.decimalToDMS(latitudeDecimal);
const longitudeDMS = lonLat.decimalToDMS(longitudeDecimal);

console.log("Latitude (DMS):", latitudeDMS); //prints 'Latitude (DMS): [ 37, 30, 43 ]'
console.log("Longitude (DMS):", longitudeDMS); //prints 'Longitude (DMS): [ -122, 15, 27 ]'
```
