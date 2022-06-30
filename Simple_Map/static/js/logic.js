// Mapping Lines

// Create the map object with a center and zoom level. Mapping Lines
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
let lineA = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];

// Coordinates for each point to be used in the polyline.
let lineB = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

  // Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085], //SFO  San Francisco
    [30.1900, -97.6687],  //AUS  Austin 
    [43.678524, -79.6291],  //YYZ Toronto
    [40.6417, -73.7809]  //JFK  New York
  ];

  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue"
  }).addTo(map);

// Then we add our '' tile layer to the map.
streets.addTo(map);

