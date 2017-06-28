/**
 * Created by deonj on 6/27/2017.
 */
var map;
function makeMap(){
    var mapOptions ={
        center: new google.maps.LatLng(42.3319740,-83.1982680),
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});