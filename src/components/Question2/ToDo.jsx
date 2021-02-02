import React, { useState } from 'react';
import './ToDo.scss';

const ToDo = ({ todo, doneTask, removeTask, editingId, setEditingId, editTask }) => {

  const [editMessage, setEditMessage] = useState('');

  const onEditMessage = () => {
    setEditMessage(todo.message);
    setEditingId(todo.id);
  }

  return (
    <div className="todo-wrap" key={todo.id}>
      {
        editingId !== todo.id ?
          <React.Fragment>
            <div className="task">
              <span className={todo.isDone ? "todo strike" : "todo"}>{todo.message}</span>
            </div>
            <div className="menu">
              {!todo.isDone && <button onClick={() => doneTask(todo.id)}>Done</button>}
              {!todo.isDone && <button onClick={() => onEditMessage()}>Edit</button>}
              <button onClick={() => removeTask(todo.id)}>Remove</button>
            </div>
          </React.Fragment> :
          <React.Fragment>
            <div className="task">
              <input type="text" value={editMessage} onChange={(e) => setEditMessage(e.target.value)} />
            </div>
            <div className="menu">
              <button onClick={() => editTask(todo.id, editMessage)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          </React.Fragment>
      }

    </div>
  );
};

export default ToDo;