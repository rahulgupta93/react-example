import React, { Component } from 'react';
import Example from './Example/Example';
import Dynamic from './Dynamic/Dynamic';
import Configurable from './Configurable/Configurable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A basic React app</h1>
        <Example />
        <Dynamic />
        <Configurable name="Adam" age="28" >My hobbies: Parkour, Mountain Climbing</Configurable>
        <Configurable name="Eve" age="27" >My hobbies: Dancing, Racing</Configurable>
      </div>
    );
  }
}

export default App;
