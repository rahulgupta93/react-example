/*
 * Example for styling a component.
 * 
 * Here we are using a component css file to style the component.
 * This file is imported in comopnent JS file.
 * 
 * Styles created in Component's CSS files are all global
 * regardless of where we import the CSS file
 **/

import React from 'react';

import './StyledComponent.css';

const styledComponent = () => {
  return <p className="StyledComponent"> This paragraph is styled using CSS file </p>; 
}

export default styledComponent;