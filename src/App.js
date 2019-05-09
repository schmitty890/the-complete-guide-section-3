import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
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
    // find the single person by reaching out to the state, we call findIndex to find the specific person that matches our id.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    // get the person by accessing the element at the person index.
    // we create a person variable so we don't mutate the original state
    const person = {
      ...this.state.persons[personIndex]
    };

    // we update the person name from the copy of our persons state
    person.name = event.target.value;

    // we update the array at the position of our id passed into our nameChangeHandler function
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // now that we have an updated persons array for our state, we call setState to update the state of our persons.
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, i'm a component</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>switch name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
