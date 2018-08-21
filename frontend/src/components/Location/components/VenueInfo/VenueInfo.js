import React, { Component } from 'react';
import './VenueInfo.css';

class VenueInfo extends Component {

  render() {
    return (
      <div className="VenueInfo">
        <div className="wrapper">
          <div className="VenueInfo__content">
            <div className="VenueInfo__content__label">
              Addison Park District - 
              Community Center
            </div>
            <div className="VenueInfo__content__address">
              120 E Oak Street,<br />
              Addison, IL 60101
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default VenueInfo;
