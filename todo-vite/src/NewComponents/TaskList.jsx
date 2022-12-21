import React from "react";
import { ListItem, ListItemText, Button, TextField } from "@mui/material";
import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const TASKS_DATA = [
  {
    id: "e1",
    taskName: "Need to finish Todo List",
    taskDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
      " dLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
    date: new Date(),
  },
  {
    id: "e2",
    taskName: "Need to finish React Course",
    taskDetails: "React Course on Udemy till December 31 2022",
    date: new Date(2022, 7, 14),
  },
];

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS_DATA,
      newTask: "",
      newDetails: "",
    };
  }

  handleDelete = (tasksArray) => {
    this.setState({
      tasks: tasksArray,
    });
  };

  handleTask = (tasksArray) => {
    console.log(tasksArray);
    this.setState({
      tasks: tasksArray,
    });
  };
  handleDetails = (tasksArray) => {
    console.log(tasksArray);
    this.setState({
      tasks: tasksArray,
    });
  };

  addNewTask = (event) => {
    const newTask = event.target.value;
    this.setState({
      newTask: newTask,
    });
    console.log(newTask);
  };

  addNewDetails = (event) => {
    const newDetails = event.target.value;

    this.setState({
      newDetails: newDetails,
    });

    console.log(newDetails);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [
        {
          id: Math.random().toString(),
          taskName: this.state.newTask,
          taskDetails: this.state.newDetails,
          date: new Date(),
        },
        ...this.state.tasks,
      ],
    });
    console.log("Added");
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            id="task"
            type="text"
            placeholder="add task"
            onChange={this.addNewTask}
          />
          <input
            placeholder="add details"
            id="details"
            type="text"
            onChange={this.addNewDetails}
          />

          <Button type="submit" variant="contained">
            Add Task
          </Button>
        </form>
        {tasks.map((task, index) => (
          <TaskItem getTask={task} getIndex={index} key={index}>
            <DeleteBtn
              onDelete={this.handleDelete}
              getTasks={tasks}
              getIndex={index}
            />
            <EditBtn
              getTasks={tasks}
              getIndex={index}
              onTask={this.handleTask}
              onDetails={this.handleDetails}
            />
          </TaskItem>
        ))}
      </>
    );
  }
}
export default TaskList;
