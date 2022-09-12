import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  taskStatusChangeHandler = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  deleteTaskHandler = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const { onCreate, taskStatusChangeHandler, deleteTaskHandler } = this;
    const { tasks } = this.state;

    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={taskStatusChangeHandler}
              onDelete={deleteTaskHandler}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
