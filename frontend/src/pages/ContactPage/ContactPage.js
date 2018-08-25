import React, { Component } from 'react';
import './ContactPage.css';
import Header from '../../components/Header/Header';
import Contact from '../../components/Contact/Contact';

class ContactPage extends Component {

  render() {
    return (
      <div className="Page ContactPage">
        <Header />
        <Contact />
      </div>
    );
  }

}

export default ContactPage;
