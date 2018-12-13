import React from 'react';

const button = (props) => {
  return <button onClick={props.onButtonClick} > {props.name} </button>;
}

export default button;