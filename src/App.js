import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a component</h1>
        <Person name="Jason" age="26"/>
        <Person name="Bill" age="60">I never thought losing my mind would be so hard.</Person>
        <Person name="Joe" age="34"/>
      </div>
    );
  }
}

export default App;
