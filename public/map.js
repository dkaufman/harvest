var map;
var harvard_square = new google.maps.LatLng(42.374390, -71.124143);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

  var mapOptions = {
    zoom: 16,
    center: harvard_square,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  var harvest_marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.3737792,-71.1218861),
      map: map,
      title: 'Harvest'
  });

  var chapel_marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.376360, -71.124655),
      map: map,
      title: 'Episcopal Divinity School'
  });

  var charles_hotel = new google.maps.Marker({
      position: new google.maps.LatLng(42.372298,-71.123068),
      map: map,
      title: 'Charles Hotel'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
