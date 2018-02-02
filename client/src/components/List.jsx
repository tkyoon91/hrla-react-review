import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
  return (
    <div>
      <input onChange={props.onInputChange}></input>
      <button onClick={props.addTask}> Add Task </button>
      <h5>Your Tasks:</h5>
      <ul>
        {props.tasks.map((task, key) => (
          <ListEntry finishTask={props.finishTask} task={task} key={key} index={key}/>
        ))}
      </ul>
    </div>
  );
};

export default List;