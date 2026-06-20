let singapore = [1.29, 103.85]; // #1 Singapore latlng
let map = L.map("map", {
  doubleClickZoom: false,
}).setView(singapore, 13); // #2 Set the center point

// let cambridge = [52.205276, 0.119167]; // #1 Cambridge England latlng
// let map = L.map("map").setView(cambridge, 20); // #2 Set the center point

// setup the tile layers
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Create a marker for singapore
let singaporeMarker = L.marker([1.2852, 103.8449]);
singaporeMarker.addTo(map);

// pop up
singaporeMarker.bindPopup("<p>Chinatown Point, Singapore</p>");
// event listener
singaporeMarker.addEventListener("click", function () {
  alert("Chinatown Point, Singapore");
});

// step 5 onwards
map.on("dblclick", function (event) {
  // Get the latitude and longitude of the double-clicked position
  let latLng = event.latlng;

  // Create a new marker at the double-clicked position
  let newMarker = L.marker([latLng.lat, latLng.lng]);
  // let newCircle = L.circle([latLng.lat, latLng.lng], {
  //   color: "red",
  //   fillColor: "orange",
  //   fillOpacity: 0.5,
  //   radius: 100,
  // });

  // Add the marker to the map
  newMarker.addTo(map);
  // newCircle.addTo(map);

  // Bind a popup to the new marker
  newMarker.bindPopup(
    `<h1>New Marker</h1><p>Lat: ${latLng.lat}, Lng: ${latLng.lng}</p>`,
  );
});

// step 6 onwards
let circle = L.circle([1.35166526, 103.773663572], {
  color: "red",
  fillColor: "orange",
  fillOpacity: 0.5,
  radius: 500,
});

// add it to the map
circle.addTo(map);

// define rectangle geographical bounds
let bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];
// create an orange rectangle
let rectangle = L.rectangle(bounds, { color: "#ff7800", weight: 1 });
rectangle.addTo(map);

// zoom the map to the rectangle bounds
// map.fitBounds(bounds);

// Add image to map
let imageUrl =
  "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/family-feeding-elephant-zoo-children?_a=BAVAZGDY0";
let imageBounds = [
  [40.712216, -74.22655],
  [40.773941, -74.12544],
];
let imageOverlay = L.imageOverlay(imageUrl, imageBounds);
imageOverlay.addTo(map);
map.fitBounds(imageBounds);
