import React, { Component } from 'react';
import './CoverForegroundImage.css';
import foregroundImage from './images/pastor-tinu-george-bless-chicago.png';

class CoverForegroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  imageLoaded = () => {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <div className="CoverForegroundImage" data-loaded={this.state.loaded}>
        <div className="wrapper">
          <img
            src={foregroundImage}
            onLoad={this.imageLoaded}
          />
          <div
            className="CoverForegroundImage__img"
            style={{
              backgroundImage: `url(${ foregroundImage })`
            }}
          />
        </div>
      </div>
    );
  }

}

export default CoverForegroundImage;
