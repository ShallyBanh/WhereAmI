
var input = document.getElementById('TextField1');

var autocomplete = new google.maps.places.Autocomplete(input);

google.maps.event.addListener(autocomplete, 'place_changed', function () {

    var place = autocomplete.getPlace();
    var lat = place.geometry.location.lat();
    var lon = place.geometry.location.lng();
    document.getElementById('Lat').value = lat;
    document.getElementById('Long').value = lon;
  });
