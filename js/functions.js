/**
 * Created by deonj on 6/27/2017.
 */

function makeMap(){
    var mapOptions ={
        center: new google.maps.LatLng(42.3319740,-83.1982680),
        zoom:10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);



}