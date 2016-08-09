
jQuery(document).ready(function() {

  function init() {
    initMaps()
  }

  function initMaps() {
    if(jQuery('#googlemaps').length) {
      google.maps.event.addDomListener(window, 'load', showGoogleMaps)
    }
  }

  function showGoogleMaps(position, centerPosition) {
    var position = [20.6236881, -87.0889599]
    var centerPosition = [20.6236881, -87.0889599]
    var latLng = new google.maps.LatLng(position[0], position[1])
    var center = new google.maps.LatLng(centerPosition[0], centerPosition[1])

    if (jQuery(window).width() < 768) {
      center = latLng
    }

    // Create an array of styles.
    var styles = [
      {
        stylers: [
          { hue: "#00ffe6" },
          { saturation: -100 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];


    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});



    var mapOptions = {
      zoom: 16, // initialize zoom level - the max value is 21
      streetViewControl: false, // hide the yellow Street View pegman
      scaleControl: true, // allow users to zoom the Google Map
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: center,
      scrollwheel: false,
    }

    var map = new google.maps.Map(document.getElementById('googlemaps'),
      mapOptions)

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // Show the default red marker at the location
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    })
  }

  jQuery(init)

});
