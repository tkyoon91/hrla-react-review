import React from 'react';

const ListEntry = (props) => {
  return (
    <div>
      <li>
        {props.task}
      </li>
      <button onClick={()=> {props.finishTask(props.index)}}>Finish Task</button>
    </div>
  );
};

export default ListEntry;