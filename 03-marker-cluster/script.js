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

// Step 2 - Random marker generator function
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

// Render marker
// for (let i = 0; i < 1000; i++) {
//   let pos = getRandomLatLng(map);
//   L.marker(pos).addTo(map);
// }

// create marker cluster
let markerClusterGroupLayer = L.markerClusterGroup();

// Generate random markers and put it in cluster
for (let i = 0; i < 1000; i++) {
  let pos = getRandomLatLng(map);
  L.marker(pos).addTo(markerClusterGroupLayer);
}
markerClusterGroupLayer.addTo(map);
