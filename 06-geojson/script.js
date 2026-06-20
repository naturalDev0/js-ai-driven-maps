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

async function renderCyclingPaths() {
  // ===============
  // Step 2 onwards
  // ===============
  let response = await axios.get("data/cycle.geojson");
  let cyclingLayer = L.geoJson(response.data, {
    onEachFeature: function (feature, layer) {      
      layer.bindPopup(`<div>
                  <p>
                       Region: ${feature.properties.CYL_PATH}
                  </p>
                  <p>
                       Department: ${feature.properties.AGENCY_MAINT}
                  </p>
               </div>`);
    },
  }).addTo(map);

  // ===============
  // Step 3 onwards
  // ===============
  cyclingLayer.setStyle({
    color: "red",
  });
}

renderCyclingPaths();
