import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Checkbox,
  List,
  Button,
  TextField,
} from "@mui/material";
import TaskList from "./TaskList";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Typography variant="h2">TODO Things</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 700,
            bgcolor: "background.paper",
            margin: "auto",
          }}
        >
          <TaskList />
        </List>
      </div>
    );
  }
}

export default Todo;

//Need to refactor DATA
