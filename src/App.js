import React, { Component } from 'react';
import ComponentCard from './ComponentCard/ComponentCard';

import allComponents from './constants/allComponents';

import './App.css';

class App extends Component {

  exampleComponents = allComponents;

  render() {
    return (
      <div className="App">
        <h1>My React Examples</h1>
        

        <ComponentCard
          cardNumber="1"
          title={this.exampleComponents[0].title}
          code={this.exampleComponents[0].code} >
          {this.exampleComponents[0].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="2"
          title={this.exampleComponents[1].title}
          code={this.exampleComponents[1].code} >
          {this.exampleComponents[1].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="3"
          title={this.exampleComponents[2].title}
          code={this.exampleComponents[2].code} >
          {this.exampleComponents[2].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="4"
          title={this.exampleComponents[3].title}
          code={this.exampleComponents[3].code} >
          {this.exampleComponents[3].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="5"
          title={this.exampleComponents[4].title}
          code={this.exampleComponents[4].code} >
          {this.exampleComponents[4].children}
        </ComponentCard>
        
        <ComponentCard
          cardNumber="6"
          title={this.exampleComponents[5].title}
          code={this.exampleComponents[5].code} >
          {this.exampleComponents[5].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="7"
          title={this.exampleComponents[6].title}
          code={this.exampleComponents[6].code} >
          {this.exampleComponents[6].children}
        </ComponentCard>

        <ComponentCard
          cardNumber="8"
          title={this.exampleComponents[7].title}
          code={this.exampleComponents[7].code} >
          {this.exampleComponents[7].children}
        </ComponentCard>

      </div>
    );
  }
}

export default App;
