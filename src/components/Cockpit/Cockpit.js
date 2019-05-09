import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = '';
  
  if(props.showPersons) {
    btnClass = classes.Red;
  }

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red'] imported from App.css as we unlocked css modules
  }

  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold'] imported from App.css as we unlocked css modules
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>switch name</button>
    </div>
  );
};

export default cockpit;