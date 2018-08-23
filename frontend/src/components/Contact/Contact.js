import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <div className="Contact__gradient" />
        <div className="Contact__gradient" />
        <div className="Contact__bg" />
        <div className="Contact__content">
          <div className="wrapper">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
