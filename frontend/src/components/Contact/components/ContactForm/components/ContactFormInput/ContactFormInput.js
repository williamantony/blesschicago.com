import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContactInput } from '../../../../../../redux/actions';
import './ContactFormInput.css';

class ContactFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `ContactForm_${ props.type }_${ props.name }_${ new Date().getTime() }`,
      type: props.type,
      name: props.name,
      label: props.label,
      value: props.value || '',
      status: {
        isFocused: false,
        isFilled: false,
      },
    };
  }

  componentWillReceiveProps(props) {
    const value = props.contactForm[this.state.name] || '';

    this.setState({
      value,
      status: {
        ...this.state.status,
        isFilled: (value === ''),
      },
    });
  }

  handleInput = (event) => {
    event.preventDefault();
    this.props.setContactInput(this.state.name, event.target.value);
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

  shouldComponentUpdate(nextProp, nextState) {
    const hasValueChanged = nextState.value !== this.state.value;
    const hasFocusChanged = nextState.status.isFocused !== this.state.status.isFocused;

    return (hasValueChanged || hasFocusChanged);
  }

  render() {
    return (
      <div
        className="ContactFormInput"
        data-filled={this.state.status.isFilled}
        data-focused={this.state.status.isFocused}
      >
        <label className="ContactFormInput__label" htmlFor={this.state.id}>{ this.state.label }</label>
        {
          (this.state.type === 'textarea')
            ? (
              <textarea
                type={this.state.type}
                id={this.state.id}
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
                id={this.state.id}
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
  return {
    contactForm: state.contactForm,
  };
};

const mapDispatchToProps = {
  setContactInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormInput);
