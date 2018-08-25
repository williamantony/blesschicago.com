import React, { Component } from 'react';
import './SchedulePage.css';
import Header from '../../components/Header/Header';
import EventSchedule from '../../components/EventSchedule/EventSchedule';

class SchedulePage extends Component {

  render() {
    return (
      <div className="Page SchedulePage">
        <Header />
        <EventSchedule />
      </div>
    );
  }

}

export default SchedulePage;
