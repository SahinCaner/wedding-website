import React from "react";
import MasterLayout from "./layout/MasterLayout";
import Hero from "./hero/Hero";

const GettingThere = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=runGoogleMaps&key=AIzaSyDbne8DWV_9boKGxofpWWmujtmSRubjqIY";
  //cript src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&key=YOUR_API_KEY"
  //script.src = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDbne8DWV_9boKGxofpWWmujtmSRubjqIY";
  document.body.appendChild(script);

  window.runGoogleMaps = function() {
    const style = [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#fcfcfc"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#fcfcfc"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#dddddd"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#dddddd"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            color: "#dddddd"
          }
        ]
      }
    ];

    const locations = [
      ["Kimberly & Caner 07.07.2018", 33.541386, -117.662425, 1]
    ];

    const options = {
      zoom: 17,
      panControl: false,
      streetViewControl: false,
      scrollwheel: false,
      center: new google.maps.LatLng(33.541386, -117.662425),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    map.setOptions({
      styles: style
    });

    const infowindow = new google.maps.InfoWindow();

    let marker, i;

    const image = {
      url: "/images/mapMarker.png",
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(12, 59)
    };

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
      });

      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
  };
  return (
    <MasterLayout>
      <Hero map>
        <div id="map" />
      </Hero>
      <div className="main main--content">
        <div className="content">
          <div className="content__item content__item--main">
            <div className="content__wrapper">
              <h1>Getting There</h1>
              <p>
                <em>
                  Please check back later more detailed information on
                  transportation and accommodation.
                </em>
              </p>
              <p>
                The venue of our wedding is the Arroyo Trabuco Golf Club in
                Mission Viejo, California.
              </p>
              <p>
                <a href="http://www.arroyotrabuco.com" target="_blank">
                  http://www.arroyotrabuco.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default GettingThere;
