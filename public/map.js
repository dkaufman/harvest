var map;
var harvard_square = new google.maps.LatLng(42.374390, -71.124143);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

  var mapOptions = {
    zoom: 13,
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

  var charles_hotel = new google.maps.Marker({
      position: new google.maps.LatLng(42.372298,-71.123068),
      map: map,
      title: 'Charles Hotel'
  });

  var le_meridien = new google.maps.Marker({
      position: new google.maps.LatLng(42.362153, -71.100004),
      map: map,
      title: 'Le Meridien'
  });

  var courtyard = new google.maps.Marker({
      position: new google.maps.LatLng(42.3586102,-71.1149609),
      map: map,
      title: 'Courtyard by Marriott'
  });

  var homewood_suites = new google.maps.Marker({
      position: new google.maps.LatLng(42.401846,-71.13615),
      map: map,
      title: 'Homewood Suites'
  });

  var best_western = new google.maps.Marker({
      position: new google.maps.LatLng(42.388608,-71.142227),
      map: map,
      title: 'Best Western Hotel Plus Tria'
  });

  var harvest_marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.3737792,-71.1218861),
      map: map,
      title: 'Harvest',
      icon: 'images/blue_marker.png'
  });

  var chapel_marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.376360, -71.124655),
      map: map,
      title: 'Episcopal Divinity School',
      icon: 'images/blue_marker.png'
  });


  var harvestContentString = '<div class="content">Harvest</div>';
  var harvestInfowindow = new google.maps.InfoWindow({
      content: harvestContentString
  });

  var harvestContentString = '<div class="content">Harvest - Reception Site</div>';
  var harvestInfowindow = new google.maps.InfoWindow({
      content: harvestContentString
  });
  google.maps.event.addListener(harvest_marker, 'click', function() {
    harvestInfowindow.open(map,harvest_marker);
  });

  var chapelContentString = '<div class="content">Episcopal Divinity School - Ceremony Site</div>';
  var chapelInfowindow = new google.maps.InfoWindow({
      content: chapelContentString
  });
  google.maps.event.addListener(chapel_marker, 'click', function() {
    chapelInfowindow.open(map,chapel_marker);
  });

  var charlesHotelContentString = '<div class="content">Charles Hotel</div>';
  var charlesHotelInfowindow = new google.maps.InfoWindow({
      content: charlesHotelContentString
  });
  google.maps.event.addListener(charles_hotel, 'click', function() {
    charlesHotelInfowindow.open(map,charles_hotel);
  });

  var leMeridienContentString = '<div class="content">Le Meridien Hotel</div>';
  var leMeridienInfowindow = new google.maps.InfoWindow({
      content: leMeridienContentString
  });
  google.maps.event.addListener(le_meridien, 'click', function() {
    leMeridienInfowindow.open(map,le_meridien);
  });

  var courtyardContentString = '<div class="content">Courtyard by Marriott</div>';
  var courtyardInfowindow = new google.maps.InfoWindow({
      content: courtyardContentString
  });
  google.maps.event.addListener(courtyard, 'click', function() {
    courtyardInfowindow.open(map,courtyard);
  });

  var homewoodSuitesContentString = '<div class="content">Homewood Suites</div>';
  var homewoodSuitesInfowindow = new google.maps.InfoWindow({
      content: homewoodSuitesContentString
  });
  google.maps.event.addListener(homewood_suites, 'click', function() {
    homewoodSuitesInfowindow.open(map,homewood_suites);
  });

  var bestWesternContentString = '<div class="content">Best Western Hotel Plus Tria</div>';
  var bestWesternInfowindow = new google.maps.InfoWindow({
      content: bestWesternContentString
  });
  google.maps.event.addListener(best_western, 'click', function() {
    bestWesternInfowindow.open(map,best_western);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
