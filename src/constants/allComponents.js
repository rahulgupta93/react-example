import codes from './codeConstants';
import React from 'react';
import Example from '../Example/Example';
import Dynamic from '../Dynamic/Dynamic';
import Configurable from '../Configurable/Configurable';
import State from '../State/State';
import Event from '../Event/Event';
import HandlerInParent from '../HandlerInParent/HandlerInParent';
import TwoWayBinding from '../TwoWayBinding/TwoWayBinding';
import StyledComponent from '../StyledComponent/StyledComponent';
import InlineStyledComponent from '../InlineStyledComponent/InlineStyledComponent';

const allComponents = [{
  title: 'Basic Component',
  code: codes.exampleComponent,
  children: <Example />
}, {
  title: 'Component with dynamic content in JSX',
  code: codes.dynamicComponent,
  children: <Dynamic />
}, {
  title: 'Component with dynamic data from outside component',
  code: codes.configurableComponent,
  children: (<div className="ml-2">
              <h4> <b> a) Using 'props' </b> </h4>
              <Configurable name="Adam" age="28" ></Configurable>
              <h4> <b> b) Using 'children' </b> </h4>
              <Configurable name="Eve" age="27" >My hobbies: Dancing, Racing</Configurable>
            </div>)
}, {
  title: 'Component with dynamic date inside its own definition (using \'state\')',
  code: codes.stateComponent,
  children: <State />
}, {
  title: 'Adding Event handlers in JSX',
  code: codes.eventComponent,
  children: <Event />
}, {
  title: 'Passing methods from parent component to child',
  code: codes.handlerInParentComponent,
  children: <HandlerInParent />
}, {
  title: 'Two way data binding',
  code: codes.twoWayBindingComponent,
  children: <TwoWayBinding />
}, {
  title: 'Styled Components',
  code: codes.styledComponent,
  children: (<div className="ml-2">
              <h4> <b> a) Using Component CSS file </b> </h4>
              <StyledComponent />
              <h4> <b> b) Using Inline 'style' property in JSX </b> </h4>
              <InlineStyledComponent />
            </div>) 
}];

export default allComponents;