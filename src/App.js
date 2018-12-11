import React, { Component } from 'react';
import Example from './Example/Example';
import Dynamic from './Dynamic/Dynamic';
import Configurable from './Configurable/Configurable';
import State from './State/State';
import Event from './Event/Event';
import HandlerInParent from './HandlerInParent/HandlerInParent';
import TwoWayBinding from './TwoWayBinding/TwoWayBinding';
import './App.css';

class App extends Component {

  state = {
    randomNumber: 3,
    textValue: 'Random Initial Text'
  }

  changeNumber = (newNumber) => {
    if(!newNumber || typeof(newNumber) !== 'number') {
      newNumber = Math.floor(Math.random()*50);
    }
    this.setState({
      randomNumber: newNumber
    });
  }

  updateText = (event) => {
    this.setState({textValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>My React Examples</h1>
        
        <h3> <b> 1.  <u>Basic component </u> </b> </h3>
        <Example />
        
        <h3> <b> 2.  <u>Component example with dynamic content in JSX </u> </b> </h3>
        <Dynamic />
        
        <h3> <b> 3.  <u>Component with dynamic data from outside component </u> </b> </h3>
        <div className="ml-2">
          <h4> <b> a) Using 'props' </b> </h4>
          <Configurable name="Adam" age="28" ></Configurable>
          <h4> <b> b) Using 'children' </b> </h4>
          <Configurable name="Eve" age="27" >My hobbies: Dancing, Racing</Configurable>
        </div>
        
        <h3> <b> 4.  <u>Component with dynamic date inside its own definition (using 'state') </u> </b> </h3>
        <State />
        
        <h3> <b> 5.  <u>Adding Event handlers in JSX </u> </b> </h3>
        <Event />
        
        <h3> <b> 6.  <u>Passing methods from parent component to child </u> </b> </h3>
        {/* Passing method without argument  */}
        <HandlerInParent buttonName="Change Age Randomly" onChangeClick={this.changeNumber} />
        {/* Passing method with argument using bind  */}
        <HandlerInParent buttonName="Change Age to 24" onChangeClick={this.changeNumber.bind(this, 24)} />
        {/* Passing method with argument using arrow function and method call  */}
        <HandlerInParent buttonName="Change Age to 27" onChangeClick={() => this.changeNumber(27)} />
        {/* In above component, method has parentheses because it is being called inside arrow function (which would be called inside child once event occurs). */}
        <Configurable name="Paul" age={this.state.randomNumber} />
        
        <h3> <b> 7.  <u> Two way data binding </u> </b> </h3>
        <p> Text Value in Parent: {this.state.textValue} </p>
        <label>Input inside child: </label><TwoWayBinding value={this.state.textValue} onTextChange={this.updateText} />
      </div>
    );
  }
}

export default App;
