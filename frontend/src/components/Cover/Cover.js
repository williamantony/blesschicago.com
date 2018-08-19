import React, { Component } from 'react';
import './Cover.css';
import CoverInfo from './components/CoverInfo/CoverInfo';
import CoverLogo from './components/CoverLogo/CoverLogo';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBgVisible: false,
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isBgVisible: true,
      });
    }, 0);
  }

  render() {
    return (
      <div className="Cover" data-isbgvisible={this.state.isBgVisible}>
        <div className="Cover__image" />
        <div className="Cover__dark-bg" />
        <div className="Cover__bg" />
        <div className="Cover__image-pastor" />
        <div className="Cover__gradient" />
        <div className="Cover__area">
          <div className="wrapper">
            <CoverLogo />
            <CoverInfo />
          </div>
        </div>
      </div>
    );
  }

}

export default Cover;
