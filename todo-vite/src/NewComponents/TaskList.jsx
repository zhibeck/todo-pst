import React from "react";
import { Button, TextField } from "@mui/material";
import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import AddTask from "./AddTask";
import FilterTasks from "./FilterTasks";

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
  {
    id: "e3",
    isComplete: false,
    taskName: "Need to find job",
    taskDetails: "React Course on Udemy till December 31 2022",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e4",
    isComplete: false,
    taskName: "Need to get rich",
    taskDetails: "React Course on Udemy till December 31 2022",
    date: new Date(2022, 7, 14),
  },
];

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS_DATA,
      filterButton: "All",
      isShowDetails: false,
      filteredData: TASKS_DATA,
    };
  }
  handleDelete = (tasksArray) => {
    this.setState({
      tasks: tasksArray,
      filteredData: tasksArray,
    });
  };

  // needed for sorting array
  handleComplete = (isComplete, index) => {
    //console.log(isComplete, index);

    //bad code, we should not change state outside of setState
    this.state.tasks[index].isComplete = isComplete;

    //console.log(this.state.tasks);
  };

  handleButtonFilter = (clickedButtonFilter) => {
    this.setState({
      filterButton: clickedButtonFilter,
    });

    const filteredTasks = this.state.tasks.filter((task) => {
      if (clickedButtonFilter === "Completed") {
        return task.isComplete === true;
      }
      if (clickedButtonFilter === "Incompleted") {
        return task.isComplete === false;
      }

      return task;
    });

    this.setState({
      filteredData: filteredTasks,
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
  handleAddTask = (newTask) => {
    this.setState({
      tasks: [newTask, ...this.state.tasks],
      filteredData: [newTask, ...this.state.filteredData],
    });
  };

  render() {
    const { tasks, filterButton, filteredData } = this.state;
    //Bad Code, because it will run everytime when i change state of anything
    // const filteredTasks = tasks.filter((task) => {
    //   if (filterButton === "Completed") {
    //     return task.isComplete === true;
    //   }
    //   if (filterButton === "Incompleted") {
    //     return task.isComplete === false;
    //   }
    //   console.log("Running");

    //   return task;
    // });

    let emptyContent;
    if (filteredData.length === 0) {
      if (filterButton === "Completed") {
        emptyContent = <h2> Nothing was completed 😔 </h2>;
      } else {
        emptyContent = <h2>Wow, you deserve a break! 👏 </h2>;
      }
    }
    console.log("Rendering");

    return (
      <>
        <AddTask onAddTask={this.handleAddTask} />
        <FilterTasks onFilterButton={this.handleButtonFilter} />
        {filteredData.length > 0
          ? filteredData.map((task, index) => (
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
            ))
          : emptyContent}
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
