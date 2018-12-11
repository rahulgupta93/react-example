/*
 * Example for two way binding component.
 * 
 * Here we are using an input element, whise initial value would be provided by parent
 * and when any change occurs in the parent element, the parent updates the value passed to child
 * and performs any required business logic.
 **/

import React from 'react';

const twoWayBinding = (props) => {
  return <input type="text" value={props.value} onChange={props.onTextChange} />; 
}

export default twoWayBinding;