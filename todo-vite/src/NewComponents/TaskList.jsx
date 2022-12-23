import React from "react";
import { Button, TextField } from "@mui/material";
import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import AddTask from "./AddTask";
import SortComponent from "./SortComponent";
const TASKS_DATA = [
  {
    id: "e1",
    isComplete: false,
    taskName: "Need to finish Todo List",
    taskDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
      " dLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
    date: new Date(),
  },
  {
    id: "e2",
    isComplete: false,
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
      isShowDetails: false,
    };
  }
  handleDelete = (tasksArray) => {
    this.setState({
      tasks: tasksArray,
    });
  };

  // needed for sorting array
  handleComplete = (isComplete, index) => {
    console.log(isComplete, index);

    //bad code, we should not change state outside of setState
    this.state.tasks[index].isComplete = isComplete;

    console.log(this.state.tasks);
  };

  handleCompleteFilter = (filteredData) => {
    if (filteredData.length > 0) {
      this.setState({
        tasks: filteredData,
      });
    }
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
  handleAddTask = (newTask) => {
    this.setState({
      tasks: [newTask, ...this.state.tasks],
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <AddTask onAddTask={this.handleAddTask} />
        <SortComponent
          tasks={tasks}
          onCompleteFilter={this.handleCompleteFilter}
        />
        {tasks.map((task, index) => (
          <TaskItem
            task={task}
            index={index}
            key={task.id}
            onComplete={this.handleComplete}
          >
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

// render() {
//     const { isShowDetails } = this.state;
//     const task = this.props.getTask;
//     return (
//       <>
//         <Button
//           variant="contained"
//           size="small"
//           onClick={() =>
//             this.setState({
//               isShowDetails: !isShowDetails,
//             })
//           }
//         >
//           {isShowDetails ? "Hide" : "Details"}
//         </Button>
//       </>
//     );
//   }
// }
