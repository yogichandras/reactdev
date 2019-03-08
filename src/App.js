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

switchNameHandler = (name) => {
 this.setState({
  persons : [
    {
    name:name,age:16
  },
  {
    name:"Isa",age:17
  },
  {
    name:"Zaki",age:20
  }
]
 });
}

nameChangedHandler = (event) =>{
  this.setState({
    persons : [
      {
      name:"Yogi",age:16
    },
    {
      name:event.target.value,age:17
    },
    {
      name:"Zaki",age:20
    }
  ]
   });
}

  render() {
const style= {
  backgroundColor : 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Aini!')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'Via')}  />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangedHandler}><p>Hobi : Tidur</p></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
