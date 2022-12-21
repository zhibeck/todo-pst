import React from "react";
import { ListItem, ListItemText, Button, TextField } from "@mui/material";
import styles from "./TaskItem.module.css";
import DateCreated from "./DateCreated";

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

          <DateCreated className={styles["item-date"]} getDate={task.date} />
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

        {this.props.children}
      </ListItem>
    );
  }
}

export default TaskItem;
