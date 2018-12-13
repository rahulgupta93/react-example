import React from 'react';

import './ComponentCard.css';

const componentCard = (props) => {
  return (
    <div className="ComponentCard" >
      <h3> <b> {props.cardNumber}.  <u> {props.title} </u> </b> </h3>
      <div className="component-content">
        <section className="code-section" >
          <label> Code </label>
          <div> <code>{props.code}</code> </div>
        </section>
        <section className="output-section" >
          <label> Output </label>
          <div> {props.children} </div>
        </section>
      </div>
    </div>
  );
}

export default componentCard;