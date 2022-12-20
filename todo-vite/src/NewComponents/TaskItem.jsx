import React from "react";
import { ListItem, ListItemText, Button, TextField } from "@mui/material";
import styles from "./TaskItem.module.css";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  render() {
    const task = this.props.getTask;
    const { showDetails } = this.state;

    return (
      <ListItem className={styles.list} key={task.id}>
        <ListItemText
          className={styles["item-list"]}
          primaryTypographyProps={{ fontSize: "20px" }}
        >
          {task.taskName}
          <span className={styles["item-date"]}>
            created on {"20 December 2022"}
          </span>
          {showDetails && (
            <div className={styles.details}>{task.taskDetails}</div>
          )}
        </ListItemText>
        <Button
          variant="contained"
          onClick={() =>
            this.setState({
              showDetails: !showDetails,
            })
          }
        >
          {showDetails ? "Hide" : "Details"}
        </Button>
        <Button style={{ marginRight: "10px" }}>Edit</Button>

        {this.props.children}
      </ListItem>
    );
  }
}

export default TaskItem;
