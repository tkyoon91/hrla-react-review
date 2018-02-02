import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ['task1', 'task2', 'task3'],
      input: '',
    }
    this.addTask = this.addTask.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }

  addTask() {
    this.setState({tasks: [...this.state.tasks, this.state.input]})
  }

  onInputChange(e){
    this.setState({input: e.target.value})
  }

  finishTask(i){
    let copy = this.state.tasks.slice();
    this.setState({tasks: copy})
  }


  render(){
    return (
      <div>
        <h3> To Do List </h3>
        <List tasks={this.state.tasks} addTask={this.addTask} onInputChange={this.onInputChange} finishTask={this.finishTask}/>
      </div>
    )
  }
}

export default App