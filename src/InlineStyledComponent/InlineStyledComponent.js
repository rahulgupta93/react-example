/*
 * Example for styling a component.
 * 
 * Here we are using inline styles by using 'style' property inside the JSC code.
 * 
 * Styles created using this method are scoped to the element
 * on which style property is applied in JSX code.
 * This is because the style property transpiles the Object into inline style properties on HTML.
 **/

import React from 'react';

const inlineStyledComponent = () => {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5em' 
  }
  return <p style={style}> This paragraph is styled using CSS file </p>; 
}

export default inlineStyledComponent;