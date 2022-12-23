import React from "react";
import { TextField, Button, Box } from "@mui/material";
import styles from "./AddTask.module.css";

const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { setFocus, ref };
};

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.inputFocus = utilizeFocus();
    this.state = {
      newTask: "",
      newDetails: "",
      rows: 1,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim().length === 0) return;

    const newTask = {
      id: Math.random().toString(),
      taskName: this.state.newTask,
      isComplete: false,
      taskDetails: this.state.newDetails,
      date: new Date(),
    };

    this.props.onAddTask(newTask);
    // cleaning inputs

    this.setState({ newDetails: "" });
    this.setState({ newTask: "" });
    this.setState({ rows: 1 });
  };

  render() {
    return (
      <Box
        component="form"
        className={styles.form}
        onSubmit={this.handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        // className={styles.form}
      >
        <TextField
          required
          label="Task"
          style={{ minWidth: "270px" }}
          size="small"
          autoFocus
          ref={this.inputFocus.ref}
          id="task"
          value={this.state.newTask}
          onChange={(e) => {
            this.setState({ newTask: e.target.value });
          }}
        />
        <TextField
          className={styles["detail-input"]}
          size="small"
          label="Details"
          onFocus={() => {
            this.setState({
              rows: 4,
            });
          }}
          rows={this.state.rows}
          multiline
          id="details"
          value={this.state.newDetails}
          onChange={(e) => {
            this.setState({ newDetails: e.target.value });
          }}
        />
        <Button
          style={{ minWidth: "120px", height: "40px" }}
          className={styles["add-button"]}
          type="submit"
          variant="contained"
          onClick={this.inputFocus.setFocus}
        >
          Add Task
        </Button>
      </Box>
    );
  }
}

export default AddTask;
