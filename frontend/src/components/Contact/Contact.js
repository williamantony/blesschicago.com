import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './components/ContactForm/ContactForm';

class Contact extends Component {

  render() {
    return (
      <div className="Contact">

        <ContactForm />

      </div>
    );
  }

}

export default Contact;
