const exampleComponent = `const example = () => {
  return <p> Hey, this example works :D </p>;
}`;

const dynamicComponent = `const dynamic = () => {
  return <p>{Math.floor(Math.random() * 30)} is a random number I generated. Isn't it cool?</p>;
}`;

const configurableComponent = `const configurable = (props) => {
  return (
    <div>
      <p>Hi, I'm {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  );
}`;

const stateComponent = `class State extends Component {

  state = {
    persons: [
      {name: 'John', age: 22},
      {name: 'Jane', age: 23},
      {name: 'Bob', age: 23}
    ]
  }

  render() {
    return (
      <div>
        <Configurable name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Configurable name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Configurable name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}`;

const eventComponent = `class Event extends Component {

  state = {
    persons: [
      {name: 'John', age: 22},
      {name: 'Jane', age: 23},
      {name: 'Bob', age: 23}
    ],
    randomComment: 'This is a random comment which will not be changed on button click!'
  }

  switchPersonsOrder = () => {
    // DO NOT DO THIS: this.state.persons[0].name = 'abc';
    let length = this.state.persons.length;
    let switchedPersons = [];
    if(length > 1) {
      for(let index=0; index < length-1; index++) {
        switchedPersons.push(this.state.persons[index+1]);
      }
      switchedPersons.push(this.state.persons[0]);
    }
    this.setState({
      persons: switchedPersons
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchPersonsOrder} > Switch names </button>
        <label> (Clicking this would change the order of persons appearing below) </label>
        <Configurable name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Configurable name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Configurable name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <p> {this.state.randomComment} </p>
      </div>
    )
  }
}`;

const styledComponent = `import './StyledComponent.css';

const styledComponent = () => {
  return <p className="StyledComponent"> This paragraph is styled using CSS file </p>; 
}`;

const handlerInParentComponent = `changeNumber = (newNumber) => {
  if(!newNumber || typeof(newNumber) !== 'number') {
    newNumber = Math.floor(Math.random()*50);
  }
  this.setState({
    randomNumber: newNumber
  });
}

render() {
  return (
    <div>
      {/* Passing method without argument  */}
      <Button name="Change Age Randomly" onButtonClick={this.changeNumber} />
      {/* Passing method with argument using bind  */}
      <Button name="Change Age to 24" onButtonClick={this.changeNumber.bind(this, 24)} />
      {/* Passing method with argument using arrow function and method call  */}
      <Button name="Change Age to 27" onButtonClick={() => this.changeNumber(27)} />
      {/* In above component, method has parentheses because it is being called inside arrow function (which would be called inside child once event occurs). */}
      <Configurable name="Paul" age={this.state.randomNumber} />
    </div>
  )
}`;

const twoWayBindingComponent = `updateText = (event) => {
  this.setState({textValue: event.target.value});
}

render() {
  return (
    <div>
      <p> Text Value in Parent: {this.state.textValue} </p>
      <label>Input inside child: </label>
      <Input value={this.state.textValue} onChange={this.updateText} />
    </div>
  ); 
}`;


const codes = {
  exampleComponent: exampleComponent,
  dynamicComponent: dynamicComponent,
  configurableComponent: configurableComponent,
  stateComponent: stateComponent,
  eventComponent: eventComponent,
  handlerInParentComponent: handlerInParentComponent,
  twoWayBindingComponent: twoWayBindingComponent,
  styledComponent: styledComponent
}

export default codes;