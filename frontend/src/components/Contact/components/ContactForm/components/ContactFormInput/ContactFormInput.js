import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContactFormInput.css';

class ContactFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      name: props.name,
      label: props.label,
      value: props.value,
      status: {
        isFocused: false,
        isFilled: false,
      }
    };
  }

  handleInput = (event) => {
    event.preventDefault();

    const { value } = event.target;

    this.setState({
      value,
      status: {
        ...this.state.status,
        isFilled: (value === ''),
      },
    });
  }

  handleFocus = (event) => {
    event.preventDefault();

    this.setState({
      status: {
        ...this.state.status,
        isFocused: true,
      },
    });
  }

  handleBlur = (event) => {
    event.preventDefault();
    
    this.setState({
      status: {
        ...this.state.status,
        isFocused: false,
      },
    });
  }

  render() {
    return (
      <div
        className="ContactFormInput"
        data-filled={this.state.status.isFilled}
        data-focused={this.state.status.isFocused}
      >
        <label className="ContactFormInput__label" htmlFor="ContactFormName">{ this.state.label }</label>
        {
          (this.state.type === 'textarea')
            ? (
              <textarea
                type={this.state.type}
                id="ContactFormName"
                className="ContactFormInput__input"
                name={this.state.name}
                value={this.state.value}
                onChange={this.handleInput}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            ) : (
              <input
                type={this.state.type}
                id="ContactFormName"
                className="ContactFormInput__input"
                name={this.state.name}
                value={this.state.value}
                onChange={this.handleInput}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            )
        }
        
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormInput);
