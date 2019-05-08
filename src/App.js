import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { id: 0,name: 'Jason', age: 29 },
      { id: 1,name: 'Bill', age: 60 },
      { id: 2,name: 'Joe', age: 34 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    console.log('deletePersonHandler');
    console.log(personIndex);
    // const persons = this.state.persons.slice(); // splice creates copy of array, spread is more modern way 
    const persons = [...this.state.persons]; // spread operator is more common to create a new array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)} />
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
