import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    const tasks = this.props.getTasks;

    const tasksArray = [...tasks];
    const index = this.props.getIndex;

    tasksArray.splice(index, 1);

    return this.props.onDelete(tasksArray);
  };

  render() {
    return (
      <IconButton
        onClick={this.delete}
        aria-label="delete"
        size="small"
        color="primary"
      >
        <DeleteIcon variant="outlined" fontSize="small" />
      </IconButton>
    );
  }
}

export default DeleteBtn;
