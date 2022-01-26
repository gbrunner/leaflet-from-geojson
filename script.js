var map = L.map('mapid').setView([40,-75.1], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 10,
  minZoom:8,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = L.marker([40,-75.1]).addTo(map);
var marker1 = L.marker([40,-75.2]).addTo(map);
var marker2 = L.marker([40,-75.3]).addTo(map);

var circle = L.circle([40,-75.2], {
    color: 'orange',
    fillColor: '#000099',
    fillOpacity: 0.9,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [40,-75.1],
    [40.2,-75.1],
    [40.2,-75.2]
],
{color:'red',
fillColor:'blue'}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker1.bindPopup("nope.");
marker2.bindPopup("<b>Goodbye</b><br>I am a popup.")
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*
var popup = L.popup()
    .setLatLng([40,-75.1])
    .setContent("I am a standalone popup.")
    .openOn(map);
*/

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
