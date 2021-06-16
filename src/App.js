import React, { Component } from 'react';
import './App.css';
import EventCalendar from './component/eventCalendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventCalendar />
      </div>
    );
  }
}

export default App;
