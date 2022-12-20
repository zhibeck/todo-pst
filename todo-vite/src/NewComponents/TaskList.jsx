import React from "react";
import { ListItem, ListItemText, Button, TextField } from "@mui/material";
import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";
import DeleteBtn from "./DeleteBtn";

const TASKS_DATA = [
  {
    id: "e1",
    taskName: "Need to finish Todo List",
    taskDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
      " dLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
    date: new Date(2020, 7, 14),
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
    };
  }

  handleDelete = (tasksArray) => {
    this.setState({
      tasks: tasksArray,
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        {tasks.map((task, index) => (
          <TaskItem getTask={task} getIndex={index} key={index}>
            <DeleteBtn
              onDelete={this.handleDelete}
              getTasks={tasks}
              getIndex={index}
            />
          </TaskItem>
        ))}
      </>
    );
  }
}
export default TaskList;
