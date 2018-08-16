import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {

  render() {
    return (
      <div className="Cover">
        <div className="Cover__image" />
        <div className="Cover__bg" />
        <div className="Cover__gradient" />
        <div className="heading">
          <div className="heading__logo">
            <div className="heading__title">Bless Chicago</div>
            <div className="heading__subtitle">
              Convention - <span className="year">2018</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Cover;
