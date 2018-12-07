/*
 * This is an example of outputting dynamic data in a component.
 * 
 * We use curle braces - {} - to add dynamic data or executable javascript.
 * The javascript can only be single line.
 * We can still make that single line a function call which in turn
 * may call other methods.
 *  
 **/

import React from 'react';

const dynamic = () => {
  return <p>{Math.floor(Math.random() * 30)} is a random number I generated. Isn't it cool?</p>;
}

export default dynamic;