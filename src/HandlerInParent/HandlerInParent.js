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

import React from 'react';
const handlerInParent = (props) => {
  return <button onClick={props.onChangeClick} > {props.buttonName} </button>;
}

export default handlerInParent;