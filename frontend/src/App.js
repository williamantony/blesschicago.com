import React, { Component } from 'react';
import './App.css';
import Cover from './components/Cover/Cover';
import BibleVerse from './components/BibleVerse/BibleVerse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <BibleVerse />
      </div>
    );
  }
}

export default App;
