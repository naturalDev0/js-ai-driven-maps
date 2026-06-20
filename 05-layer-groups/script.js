let singapore = [1.29, 103.85]; // #1 Singapore latlng
let map = L.map("map").setView(singapore, 13); // #2 Set the center point

// let cambridge = [52.205276, 0.119167]; // #1 Cambridge England latlng
// let map = L.map("map").setView(cambridge, 20); // #2 Set the center point

// setup the tile layers
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function getRandomLatLng(map) {
  // get the boundaries of the map
  let bounds = map.getBounds();
  let southWest = bounds.getSouthWest();
  let northEast = bounds.getNorthEast();
  let lngSpan = northEast.lng - southWest.lng;
  let latSpan = northEast.lat - southWest.lat;

  let randomLng = Math.random() * lngSpan + southWest.lng;
  let randomLat = Math.random() * latSpan + southWest.lat;

  return [randomLat, randomLng];
}

let group = L.layerGroup(); // 1. create the layer group
L.marker(getRandomLatLng(map)).addTo(group); // 2. add markers to the group
L.marker(getRandomLatLng(map)).addTo(group);
L.marker(getRandomLatLng(map)).addTo(group);

// add the group layer to the map
group.addTo(map); // 3. add the layer to the map

// Step 3 onwards
let group2 = L.layerGroup();
for (let i = 0; i < 5; i++) {
  L.circle(getRandomLatLng(map), {
    color: "red",
    fillColor: "orange",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(group2);
}

// Step 4 onwards
let group3 = L.layerGroup();
for (let i = 0; i < 5; i++) {
  L.circle(getRandomLatLng(map), {
    color: "red",
    fillColor: "green",
    fillOpacity: 0.5,
    radius: 250,
  }).addTo(group3);
}

// Step 5 onwards
let baseLayers = {
  Markers: group,
  Circles: group2,
};
let overlays = {
  "Green Circle": group3,
};

// Step 6 onwards
L.control.layers(baseLayers, overlays).addTo(map);

// Step 7 onwards
document.querySelector("#toggle-btn").addEventListener("click", function () {
  // use hasLayer() to check if the map already have the shopping layer group
  // reminder: group2 contains all the circles
  if (map.hasLayer(group2)) {
    map.removeLayer(group2);
  } else {
    map.addLayer(group2);
  }
});
