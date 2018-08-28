import React, { Component } from 'react';
import './Cover.css';
import CoverInfo from './components/CoverInfo/CoverInfo';
import CoverLogo from './components/CoverLogo/CoverLogo';
import CoverBackgroundImage from './components/CoverBackgroundImage/CoverBackgroundImage';
import CoverForegroundImage from './components/CoverForegroundImage/CoverForegroundImage';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 0);
  }

  render() {
    return (
      <div className="Cover" data-loaded={this.state.loaded}>
        <div className="Cover__dark-bg" />
        <div className="Cover__bg" />
        <div className="Cover__gradient" />
        <CoverForegroundImage />
        <div className="Cover__area">
          <div className="wrapper">
            {/* <CoverLogo /> */}
            <CoverInfo />
          </div>
        </div>
      </div>
    );
  }

}

export default Cover;
