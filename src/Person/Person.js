import React from 'react';

const person = (props) => {
    return (
        <div>
<p>Hi, I'm {props.name} My age is {props.age}</p>
 {props.children}   
        </div>
    );
}

export default person;