import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { name: 'Jason', age: 29 },
      { name: 'Bill', age: 60 },
      { name: 'Joe', age: 34 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('clicked');
    // this.state.persons[0].name = 'Jayyyson'; // this will not work as you are updating state directly
    this.setState({ persons: [ {
      name: 'JAYYYSON',
      age: 30
    },{
      name: 'Bill',
      age: 60
    },{
      name: 'Joe',
      age: 34
    } ] })
  }

  nameChangeHandler = (event) => {
    this.setState({ persons: [ {
      name: 'Jason',
      age: 30
    },{
      name: event.target.value,
      age: 60
    },{
      name: 'Joe',
      age: 34
    } ] })
  }

  togglePersonsHandler = () => { // use arrow function to return to the this keyword of this class
    console.log('togglePersonsHandler');
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name} 
              age={person.age} />
          })}
        </div>        
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a component</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
