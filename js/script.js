function initMap() {
  var hanabusa = new google.maps.LatLng(41.88198841553372, -87.6267431418237);
	var strings = new google.maps.LatLng(41.85358234651394, -87.63326353748585);
	var sushitaku = new google.maps.LatLng(41.903499306812044, -87.67517526858333);

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 41.88199940173343, lng: -87.62676460031378 },
  });
  const marker1 = new google.maps.Marker({
    position: hanabusa,
    map:map,
  });
  const marker2 = new google.maps.Marker({
    position: strings,
    map:map,
  });
  const marker3 = new google.maps.Marker({
    position: sushitaku,
    map:map,
  });
}

window.initMap = initMap;