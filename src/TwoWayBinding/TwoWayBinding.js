/*
 * Example for two way binding component.
 * 
 * Here we are using an input element, whise initial value would be provided by parent
 * and when any change occurs in the parent element, the parent updates the value passed to child
 * and performs any required business logic.
 **/

import React, {Component} from 'react';
import Input from '../Input/Input';

class TwoWayBinding extends Component {

  state = {
    textValue: 'Random Initial Text'
  }

  updateText = (event) => {
    this.setState({textValue: event.target.value});
  }

  render() {
    return (
      <div>
        <p> Text Value in Parent: {this.state.textValue} </p>
        <label>Input inside child: </label>
        <Input value={this.state.textValue} onChange={this.updateText} />
      </div>
    ); 
  }
}

export default TwoWayBinding;