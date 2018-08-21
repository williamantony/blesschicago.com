import React, { Component } from 'react';
import './Location.css';
import VenueMap from './components/VenueMap/VenueMap';
import VenueInfo from './components/VenueInfo/VenueInfo';

class Location extends Component {

  render() {
    return (
      <div className="Location">
        <VenueMap />
        <VenueInfo />
      </div>
    );
  }

}

export default Location;
