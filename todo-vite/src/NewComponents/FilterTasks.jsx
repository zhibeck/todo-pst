import React from "react";
import { Button } from "@mui/material";
import styles from "./FilterTasks.module.css";

class FilterTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeActive: false,
      incompleteActive: false,
      allActive: true,
    };
  }

  sortButtonHandler = (event) => {
    // const tasks = this.props.tasks;

    const buttonFilter = event.target.textContent;

    if (buttonFilter === "Completed") {
      this.setState({
        completeActive: true,
        incompleteActive: false,
        allActive: false,
      });
    }

    if (buttonFilter === "Incompleted") {
      this.setState({
        completeActive: false,
        incompleteActive: true,
        allActive: false,
      });
    }

    if (buttonFilter === "All") {
      this.setState({
        completeActive: false,
        incompleteActive: false,
        allActive: true,
      });
    }

    this.props.onFilterButton(buttonFilter);
  };

  render() {
    const { completeActive, incompleteActive, allActive } = this.state;

    return (
      <section className={styles["filter-section"]}>
        <h5 className={styles["show-tasks"]}>SHOW TASKS: </h5>
        <Button
          type="text"
          variant={completeActive ? "outlined" : "text"}
          onClick={this.sortButtonHandler}
        >
          Completed
        </Button>
        <Button
          variant={incompleteActive ? "outlined" : "text"}
          onClick={this.sortButtonHandler}
        >
          Incompleted
        </Button>
        <Button
          variant={allActive ? "outlined" : "text"}
          onClick={this.sortButtonHandler}
        >
          All
        </Button>
      </section>
    );
  }
}

export default FilterTasks;
