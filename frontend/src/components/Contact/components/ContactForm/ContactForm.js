import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContactForm.css';
import ContactFormInput from './components/ContactFormInput/ContactFormInput';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...props.contactForm,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    
  }

  render() {
    return (
      <div className="ContactForm">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>

          <ContactFormInput
            type="text"
            name="name"
            label="Full Name"
          />
          <ContactFormInput
            type="email"
            name="email"
            label="Email Address"
          />
          <ContactFormInput
            type="textarea"
            name="message"
            label="Your Message"
          />

          <div className="ContactFormButton">
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    contactForm: state.contactForm,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
