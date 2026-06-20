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

// =============================
// Step 3 - Load the json file
// =============================
async function loadLocations() {
  const response = await axios.get("locations.json");
  const locations = response.data.tourist_spots;
  for (let l of locations) {
    L.marker([l.lat, l.lng]).addTo(map).bindPopup(`<h1>${l.name}</h1>`);
  }
}

loadLocations();
