import React, { useEffect } from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(function() {
      console.log('saved data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); // pass an empty array if you only want useEffect to fire once.
  // pass in the array props.persons if you want useEffect to fire every time your persons data state has changed.

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return() => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  }) 

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