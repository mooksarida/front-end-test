import React, { useEffect } from "react";

const Question5 = () => {

  useEffect(() => {
    let obj1 = {
      name: 'a',
      age: 23
    }
    let obj2 = { ...obj1 };
    obj1.name = 'b';
    console.log('Q6')
    console.log('What is an example of an immutable object in JavaScript?');
    console.log(`let obj1 = {name: 'a',age: 23};`);
    console.log(`let obj2 = {...obj1};`);
    console.log(`obj1.name = 'b';`);
    console.log(obj1, obj2)
    console.log('-------------------------')
    console.log('What are the pros and cons of immutability?');
    console.log('pros -> Keep the state (can undo/redo), Easy for understand')
    console.log('cons -> Less performance than mutable approach with small datasets, It needs a discipline thorough the team')
    console.log('-------------------------')
    console.log('How can you achieve immutability in your own code?');
    console.log('When object is changed. Immutability can keep object every step changed.')
  }, []);


  return (
    <div >
      <h2>Question 6</h2>
      <p>See answer on console.</p>
    </div>
  )
}

export default Question5;
