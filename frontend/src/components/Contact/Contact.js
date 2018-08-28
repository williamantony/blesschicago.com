import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Heading from '../Heading/Heading';

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <div className="Contact__gradient" />
        <div className="Contact__gradient" />
        <div className="Contact__bg" />
        <div className="Contact__content">
          <div className="wrapper">
            <Heading type="h2" text="Contact Us" />
            <div className="Contact__flexContent">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
