import React, { Component } from 'react';
import './LocationPage.css';
import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';

class LocationPage extends Component {

  render() {
    return (
      <div className="Page LocationPage">
        <Header />
        <Location />
      </div>
    );
  }

}

export default LocationPage;
