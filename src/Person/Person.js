import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
<p onClick={props.click}>Hi, I'm {props.name} My age is {props.age}</p>
 {props.children}   

 <input type="text" onChange={props.change}/>
        </div>
    );
}

export default person;