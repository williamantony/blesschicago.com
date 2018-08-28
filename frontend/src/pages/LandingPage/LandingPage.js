import React, { Component } from 'react';
import './LandingPage.css';
import Header from '../../components/Header/Header';
import Cover from '../../components/Cover/Cover';
import BibleVerse from '../../components/BibleVerse/BibleVerse';
import EventSchedule from '../../components/EventSchedule/EventSchedule';
import Location from '../../components/Location/Location';
import Contact from '../../components/Contact/Contact';

class LandingPage extends Component {

  render() {
    return (
      <div className="Page LandingPage">
        <Header />
        <Cover />
        <BibleVerse />
        <EventSchedule />
        <Location />
        <Contact />
      </div>
    );
  }

}

export default LandingPage;
