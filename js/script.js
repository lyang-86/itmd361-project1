function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 41.88199940173343, lng: -87.62676460031378 },
  });
}

$(document).ready(function() {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    auto: true,
  });
});

window.initMap = initMap;
