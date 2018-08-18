import React, { Component } from 'react';
import './Cover.css';

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
            <div className="Header__logo">
              <div className="Header__logo__title">Bless Chicago</div>
              <div className="Header__logo__subtitle">
                Convention - <span className="year">2018</span>
              </div>
            </div>

            <div className="Info">
              <div className="Info__name">Guest Pastor</div>
              <div className="Info__desc">Pastor Tinu George</div>
            </div>

            <div className="Info">
              <div className="Info__name">Date & Time</div>
              <div className="Info__desc">
                September 21 - 23<br/>
                Friday, Saturday & Sunday<br />
                starting at 6:30 pm
              </div>
            </div>

            <div className="Info">
              <div className="Info__name">Venue</div>
              <div className="Info__desc">
                Community Center<br />
                120 E Oak St, Addison, IL 60101
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Cover;
