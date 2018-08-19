import React, { Component } from 'react';
import './CoverLogo.css';

class CoverLogo extends Component {

  render() {
    return (
      <div className="CoverLogo">
        <div className="CoverLogo__title">Bless Chicago</div>
        <div className="CoverLogo__subtitle">
          Convention - <span className="year">2018</span>
        </div>
      </div>
    );
  }

}

export default CoverLogo;
