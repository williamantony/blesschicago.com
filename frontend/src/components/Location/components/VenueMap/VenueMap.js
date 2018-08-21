import React, { Component } from 'react';
import './VenueMap.css';

class VenueMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: 'AIzaSyCH2dFcRu2gHeYOMZaC0yzhD_Fq5sit4Ro',
    };
  }

  componentWillMount() {

    window.initMap = () => {

      const { google } = global;

      const position = {
        lat: 41.933885,
        lng: -87.985272,
      };

      const map = new google.maps.Map(document.getElementById('GoogleMap'), {
        center: position,
        zoom: 15,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: [
          {
            featureType: 'administrative',
            stylers: [{
              saturation: -100,
            }],
          },
          {
            featureType: 'landscape',
            stylers: [{
              saturation: -100,
            }],
          },
          {
            featureType: 'transit',
            stylers: [{
              saturation: -100,
            }],
          },
          {
            featureType: 'poi',
            stylers: [{
              visibility: "off"
            }],
          },
          {
            featureType: 'poi.park',
            stylers: [{
              visibility: "on"
            }],
          },
          {
            featureType: 'water',
            stylers: [{
              saturation: -100,
            }],
          },
        ],
      });

      var marker = new google.maps.Marker({
        position,
        map: map,
        title: 'Bless Chicago Convention'
      });

    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ this.state.api }&callback=initMap`;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="VenueMap">
        {/* <div id="GoogleMap" className="map" /> */}
      </div>
    );
  }

}

export default VenueMap;
