import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import styles from "./TaskItem.module.css";
import DateCreated from "./DateCreated";
import Details from "./Details";
class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      isComplete: false,
    };
  }

  handleComplete = (event) => {
    const isComplete = event.target.checked;
    const index = this.props.index;
    this.props.onComplete(isComplete, index);

    this.setState({
      isComplete: !this.state.isComplete,
    });
  };

  render() {
    const { task, index } = this.props;

    const { showDetails, isComplete } = this.state;

    return (
      <>
        <ListItem className={styles.list} key={task.id}>
          <span>{index + 1}</span>
          <input
            type="checkbox"
            className={styles["complete-checkbox"]}
            onClick={this.handleComplete}
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
          <Details className={styles.details} getDetails={task.taskDetails} />
        )}
      </>
    );
  }
}

export default TaskItem;
