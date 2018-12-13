import React from 'react';

const input = (props) => {
  return <input type="text" value={props.value} onChange={props.onChange} />; 
}

export default input;