/*
 * This is an example of outputting dynamic data in a component.
 * 
 * In this particular example, we are using method arguments
 * to make the content inside a component more configurable.
 * 
 * We also use the children property of the methosd argument which is a reserved property.
 * This property is used to access the content written inside the opening and closing tags
 * of this components when it is used in any other component in jsx.
 * 
 * We use curle braces - {} - to add arguments data.
 **/

import React from 'react';

// const configurable = (props) => {
//   return <p>Hi, I'm {props.name} and I am {props.age} years old.</p>;
// }
const configurable = (props) => {
  return (
    <div>
      <p>Hi, I'm {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  );
}

export default configurable;