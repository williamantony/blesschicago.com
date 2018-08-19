import React, { Component } from 'react';
import './CoverInfo.css';

class CoverInfo extends Component {

  render() {
    return (
      <div className="CoverInfo">
        <div className="CoverInfo__item">
          <div className="name">Speaker</div>
          <div className="desc">Pastor Tinu George</div>
        </div>
        <div className="CoverInfo__item">
          <div className="name">Dates</div>
          <div className="desc">
            September 21 - September 23, 2018<br/>
          </div>
        </div>
        <div className="CoverInfo__item">
          <div className="name">Venue</div>
          <div className="desc">
            Addison Park District’s Community Center
          </div>
        </div>
      </div>
    );
  }

}

export default CoverInfo;
