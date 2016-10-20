$(function() {
  var map, geoLocate;

  require([
    "esri/map",
    "esri/dijit/LocateButton",
    "esri/dijit/PopupMobile",
    "dojo/domReady!"], function(Map, LocateButton, PopupMobile) {
      var popup = new PopupMobile(null,dojo.create("div"));
      map = new Map("map", {
        center: [-56.049, 38.485],
        zoom: 8,
        basemap: "streets",
        infoWindow: popup
      });

      geoLocate = new LocateButton({
        map: map,
        scale: 3,
        setScale: true
      }, "LocateButton");
      geoLocate.startup();
      map.on("click", function(data){
        console.log(data);
      });

  });

});
