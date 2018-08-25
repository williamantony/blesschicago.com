import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import LocationPage from './pages/LocationPage/LocationPage';
import ContactPage from './pages/ContactPage/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/schedule" component={SchedulePage} />
          <Route exact path="/venue" component={LocationPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
