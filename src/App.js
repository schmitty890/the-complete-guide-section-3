import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
      name: 'Jason',
      age: 29
    },{
      name: 'Bill',
      age: 60
    },{
      name: 'Joe',
      age: 34
    }]
  }

  switchNameHandler = () => {
    console.log('clicked');
    // this.state.persons[0].name = 'Jayyyson'; // this will not work as you are updating state directly
    this.setState({ persons: [ {
      name: 'Jayyyyyson',
      age: 30
    },{
      name: 'Bill',
      age: 60
    },{
      name: 'Joe',
      age: 34
    } ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a component</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I never thought losing my mind would be so hard.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
