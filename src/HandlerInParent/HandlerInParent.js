/*
 * This is an example of passing event handler method from parent to child.
 * 
 * We define the method in parent component and then pass the method definition
 * to the child component using props.
 * 
 * We can also send the arguments while sending method definition using 2 methods:
 * 1) Use bind() with method definition.
 * 2) Pass arrow method which calls the handler method. There we can pass the arguments required.
 **/

import React, {Component} from 'react';
import Configurable from '../Configurable/Configurable';
import Button from '../Button/Button';

class HandlerInParent extends Component {

  state = {
    randomNumber: 3
  }

  changeNumber = (newNumber) => {
    if(!newNumber || typeof(newNumber) !== 'number') {
      newNumber = Math.floor(Math.random()*50);
    }
    this.setState({
      randomNumber: newNumber
    });
  }

  render() {
    return (
      <div>
        {/* Passing method without argument  */}
        <Button name="Change Age Randomly" onButtonClick={this.changeNumber} />
        {/* Passing method with argument using bind  */}
        <Button name="Change Age to 24" onButtonClick={this.changeNumber.bind(this, 24)} />
        {/* Passing method with argument using arrow function and method call  */}
        <Button name="Change Age to 27" onButtonClick={() => this.changeNumber(27)} />
        {/* In above component, method has parentheses because it is being called inside arrow function (which would be called inside child once event occurs). */}
        <Configurable name="Paul" age={this.state.randomNumber} />
      </div>
    )
  }
}

export default HandlerInParent;