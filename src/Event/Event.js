/*
 * This is an example of adding events to JSX.
 * 
 * We use a method and pass it to the event in JSX.
 * Following points must be noticed:
 * 1) The state property must not be mutated directly, as it would not do anything.
 *    We can only use setState method provided by Component class to change the state.
 *    This method only need those properties inside state that are modified.
 *    The properties that are not added to this method remain unchanged.
 * 2) Method passed must not contain parentheses after method name.
 * 3) Method should be defined using ES-6 method of writing functions (i.e. Arrow functions)
 *    as it retains the value of this keyword. This would be used to access class properties
 *    including the state property.
 **/

import React, {Component} from 'react';
import Configurable from '../Configurable/Configurable';

class Event extends Component {

  state = {
    persons: [
      {name: 'John', age: 22},
      {name: 'Jane', age: 23},
      {name: 'Bob', age: 23}
    ],
    randomComment: 'This is a random comment which will not be changed on button click!'
  }

  switchPersonsOrder = () => {
    // DO NOT DO THIS: this.state.persons[0].name = 'abc';
    let length = this.state.persons.length;
    let switchedPersons = [];
    if(length > 1) {
      for(let index=0; index < length-1; index++) {
        switchedPersons.push(this.state.persons[index+1]);
      }
      switchedPersons.push(this.state.persons[0]);
    }
    this.setState({
      persons: switchedPersons
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchPersonsOrder} > Switch names </button>
        <label> (Clicking this would change the order of persons appearing below) </label>
        <Configurable name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Configurable name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Configurable name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <p> {this.state.randomComment} </p>
      </div>
    )
  }
}

export default Event;