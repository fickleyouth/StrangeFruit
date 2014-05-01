/**
 * map.js - js for Google Maps API plugin using jquery library
 */

$(document).ready(function() {
$("span#map").hide();
});
 
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");
    
  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
var map, layer;
function initialize() {

var map_coords = $('div#map_canvas').attr('coordinates');
//split coordinates into latitude and longitude
var coords = map_coords.split(",");
//output coordinates for current content id
$('div.description').append('<h6>Map Coordinates</h6><p>latitude = '+coords[0]+'<br/>longitude = '+coords[1]+'</p>');

//standard google map output
var map_canvas = document.getElementById('map_canvas');
var coords = {"lat" : coords[0], "long" : coords[1]};
var map_options = {
center: new google.maps.LatLng(coords.lat, coords.long),
zoom: 5,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
//1893 Fusion table, if you don't set supressInfoWindows to false nothing will happen when you click on a marker
var infoWindow = new google.maps.InfoWindow();
var map = new google.maps.Map(map_canvas, map_options);
var firstLayer = new google.maps.FusionTablesLayer ({
    	query: {
    		select: 'Location',
    		from: '1-o-pMIAYLcszReS3Vt-zjEaeGzqZZkkcC2cL_SG0'
    		},    		   
    map: map,
    suppressInfoWindows: false
});
    	
 //1894 layer. I styled this marker  	
 var secondLayer = new google.maps.FusionTablesLayer ({
   query: {
    select: 'Location',
    from: '1FHvux3ig0M98jYFRaMplzskct_f6DP9OwETCxS3q'
    		},
    styles: [{
    markerOptions: {
    			iconName: "small_blue"
    			}
    			}], 
        
    map: map,
    suppressInfoWindows: false
});

//trying to code the legend took longer than it probably should have. Just happy to have got on there and positioned it. 
 var legend = document.createElement('div');
 legend.id = 'legend';
 var content = [];
 content.push('<h6>Lynchings</h6>');
 content.push('<p><div class="color red"></div>1893</p>');
 content.push('<p><div class="color blue"></div>1894</p<');
 legend.innerHTML = content.join ('');
 legend.index = 1;
 map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);
 
 secondlayer.setMap(map);

    }
 
 
    

//load and render the map on window load
google.maps.event.addDomListener(window, 'load', initialize);