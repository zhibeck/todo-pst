import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import styles from "./TaskItem.module.css";
import DateCreated from "./DateCreated";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      isComplete: false,
    };
  }

  render() {
    const { getTask } = this.props;
    const task = getTask;
    const { showDetails, isComplete } = this.state;

    return (
      <>
        <ListItem className={styles.list} key={task.id}>
          <input
            type="checkbox"
            className={styles["complete-checkbox"]}
            onClick={() => {
              this.setState({
                isComplete: !isComplete,
              });
              // console.log(isComplete);
            }}
          />
          <ListItemText
            // className={styles["item-list"]}
            className={
              isComplete ? styles["item-list-completed"] : styles["item-list"]
            }
            primaryTypographyProps={{ fontSize: "20px" }}
          >
            {task.taskName}

            <DateCreated className={styles["item-date"]} getDate={task.date} />
            {/* {showDetails && (
              <div className={styles.details}>{task.taskDetails}</div>
            )} */}
          </ListItemText>

          <Button
            variant="contained"
            size="small"
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
        {/* //Need to style, add transition and make it appear below the list item */}
        {showDetails && (
          <div className={styles.details}>{task.taskDetails}</div>
        )}
      </>
    );
  }
}

export default TaskItem;
