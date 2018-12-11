/*
 * This is an example of outputting dynamic data in a component.
 * 
 * In this particular example, we are using 'state' reserved keyword
 * to make the content inside a component more dynamic.
 * 
 * This data can be changed using some logic in order to render dynamic
 * and configurable data.
 **/

import React, {Component} from 'react';
import Configurable from '../Configurable/Configurable';

class State extends Component {

  state = {
    persons: [
      {name: 'John', age: 22},
      {name: 'Jane', age: 23},
      {name: 'Bob', age: 23}
    ]
  }

  render() {
    return (
      <div>
        <Configurable name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Configurable name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Configurable name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default State;