import React, { Component } from 'react';
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

  handleSubmit = (event) => {
    event.preventDefault();


  }

  handleInput = (event) => {

    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="ContactForm">
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

        </form>
      </div>
    );
  }

}

export default ContactForm;
