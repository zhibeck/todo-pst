import React from "react";
import { TextField, Button } from "@mui/material";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      newDetails: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim().length < 0) return;

    const newTask = {
      id: Math.random().toString(),
      taskName: this.state.newTask,
      taskDetails: this.state.newDetails,
      date: new Date(),
    };

    this.props.onAddTask(newTask);
    // cleaning inputs
    this.setState({ newDetails: "" });
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          label="Required"
          size="small"
          id="task"
          type="text"
          placeholder="add task"
          value={this.state.newTask}
          onChange={(e) => {
            this.setState({ newTask: e.target.value });
          }}
        />
        <TextField
          size="small"
          label="Details"
          id="details"
          value={this.state.newDetails}
          onChange={(e) => {
            this.setState({ newDetails: e.target.value });
          }}
        />
        <Button type="submit" variant="contained">
          Add Task
        </Button>
      </form>
    );
  }
}

export default AddTask;
