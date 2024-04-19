$(document).ready(function() {
    google.maps.event.addDomListener(window, "load", init);
    function init() {
        var mapOptions = {
            zoom: 13,
            scrollwheel: false,
            draggable: false,
            center: new google.maps.LatLng(40.7127, -74.0059),
            styles: [ {
                featureType: "water",
                elementType: "geometry",
                stylers: [ {
                    color: "#005f91"
                } ]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [ {
                    color: "#008cca"
                } ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [ {
                    color: "#00b7de"
                }, {
                    lightness: -37
                } ]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [ {
                    color: "#00ace9"
                } ]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [ {
                    color: "#00ace9"
                } ]
            }, {
                elementType: "labels.text.stroke",
                stylers: [ {
                    visibility: "on"
                }, {
                    color: "#009ed9"
                }, {
                    weight: 2
                }, {
                    gamma: .84
                } ]
            }, {
                elementType: "labels.text.fill",
                stylers: [ {
                    color: "#ffffff"
                } ]
            }, {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [ {
                    weight: .6
                }, {
                    color: "#006792"
                } ]
            }, {
                elementType: "labels.icon",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [ {
                    color: "#008cca"
                } ]
            } ]
        };
        var mapElement = document.getElementById("map");
        var map = new google.maps.Map(mapElement, mapOptions);
    }
});