import React from "react";
import { Button } from "@mui/material";

class EditBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  editTaskName = (event) => {
    const newTask = event.target.value;

    const tasks = this.props.getTasks;
    const index = this.props.getIndex;

    tasks[index].taskName = newTask;

    return this.props.onTask(tasks);
  };

  editDetails = (event) => {
    const newDetails = event.target.value;

    const tasks = this.props.getTasks;
    const index = this.props.getIndex;

    tasks[index].taskDetails = newDetails;

    return this.props.onDetails(tasks);
  };

  render() {
    // const tasks = this.props.getTasks;
    // const index = this.props.getIndex;
    const { isEditing } = this.state;

    return (
      <>
        <Button
          onClick={() =>
            this.setState({
              isEditing: !this.state.isEditing,
            })
          }
          aria-label="edit"
          color="primary"
        >
          {!isEditing ? "Edit" : "Done"}
        </Button>
        {isEditing && (
          <div>
            <input type="text" onChange={this.editTaskName} />
            <input type="text" onChange={this.editDetails} />
          </div>
        )}
      </>
    );
  }
}

export default EditBtn;
