import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: (props.type || 'h1').toLowerCase(),
      text: props.text || '',
    };
  }
 
  render() {
    return (
      <div className="Heading">
        {
          (() => {
            switch (this.state.type) {
              case 'h1':
                return (
                  <div className="text">
                    <h1>{ this.state.text }</h1>
                  </div>
                );
              
              case 'h2':
                return (
                  <div className="text">
                    <h2>{ this.state.text }</h2>
                  </div>
                );
              
              case 'h3':
                return (
                  <div className="text">
                    <h3>{ this.state.text }</h3>
                    <div className="line" />
                  </div>
                );
              
              default:
                return (
                  <div className="text">
                    <h3>{ this.state.text }</h3>
                    <div className="line" />
                  </div>
                );
            }
          })()
        }
      </div>
    );
  }

}

export default Heading;
