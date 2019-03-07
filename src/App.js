import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
state = {
  persons : [
    {
    name:"Yogi",age:16
  },
  {
    name:"Isa",age:17
  },
  {
    name:"Zaki",age:20
  }
]
}

switchNameHandler = () => {
 console.log('Was Clicked!');  
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><p>Hobi : Tidur</p></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
