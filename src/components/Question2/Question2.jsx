import React, { useState, useEffect } from "react";
import ToDo from './ToDo';
import './Question2.scss';

const Question2 = () => {

  useEffect(() => {
    const sampleLists = [
      { id: 1, message: 'Daily Meeting', isDone: false },
      { id: 2, message: 'Workout', isDone: true }
    ];
    setToDoLists([...sampleLists]);
    setCountId(sampleLists.length + 1)
  }, []);

  const [toDoLists, setToDoLists] = useState([]);
  const [countId, setCountId] = useState(1);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTodoList = () => {
    if (!!message) {
      setToDoLists([...toDoLists, { id: countId, message: message, isDone: false }]);
      setCountId(countId + 1);
      setMessage('');
    }
  }

  const doneTask = (id) => {
    let mapToDo = toDoLists.map(todo => todo.id === id ? { ...todo, isDone: true } : { ...todo });
    setToDoLists(mapToDo);
  }

  const removeTask = (id) => {
    let removeIndex = toDoLists.findIndex(todo => todo.id === id);
    toDoLists.splice(removeIndex, 1)
    setToDoLists([...toDoLists]);
  }

  const editTask = (id, newMessage) => {
    let mapToDo = toDoLists.map(todo => todo.id === id ? { ...todo, message: newMessage } : { ...todo });
    setToDoLists(mapToDo);
    setEditingId(null);
  }

  return (
    <div className="q2-wrap">
      <h2>Question 2</h2>
      <span>Todo: </span>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={addTodoList}>Add</button>
      {toDoLists && toDoLists.length > 0 &&
        <div className="todo-list">
          {
            toDoLists.map(todo => {
              return (
                <ToDo key={todo.id} todo={todo} doneTask={doneTask} removeTask={removeTask} editingId={editingId} 
                setEditingId={setEditingId} editTask={editTask} />
              );
            })
          }
        </div>
      }
    </div>
  )
}

export default Question2;