function getRandomAltitude() {
    let mins=-90, maks=90;
    let diff = maks - mins;
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand += mins;
    return rand;
}

function getRandomLongitude() {
    let mins=-180, maks=180;
    let diff = maks - mins;
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand += mins;
    return rand;
}

// Initial location
var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
}

// Creating a map object
var map = new L.map('map', mapOptions);
 
// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 
// Adding layer to the map
map.addLayer(layer);

var interval = setInterval(function () {
    var x = getRandomAltitude(), y = getRandomLongitude();
    // Move map center to the new altitude and longitude value
    map.panTo(new L.LatLng(x, y));
  }, 1000);