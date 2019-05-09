import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [ 
      { id: 0,name: 'Jason', age: 29 },
      { id: 1,name: 'Bill', age: 60 },
      { id: 2,name: 'Joe', age: 34 }
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return props;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
