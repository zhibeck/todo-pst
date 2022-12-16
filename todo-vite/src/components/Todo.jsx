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

import React from "react";
import "./Todo.css";
import Edit from "./Edit";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "new task shoud be displayed here",
      isTaskDone: false,
      doAddTask: false,
      isClickedAdd: false,
      todoList: ["Sample todo task"],
      isAddDetails: false,
    };

    //this.todoList = ["Sample of to do task output"];
  }

  newTask = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  submitTask = () => {
    this.state.todoList.push(this.state.task);

    this.setState({
      doAddTask: false,
      isClickedAdd: false,
    });
  };

  delete = (index) => {
    const { todoList } = this.state;
    console.log(todoList);
    console.log(index);

    const todoListArr = [...todoList];

    todoListArr.splice(index, 1);

    this.setState({
      todoList: todoListArr,
    });
  };

  render() {
    return (
      <section className="todo-section">
        <Typography variant="h2">TODO Things</Typography>
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          {this.state.todoList.map((task, key) => (
            <ListItem key={key}>
              <ListItemButton
                role={undefined}
                onClick={() => console.log("List is being clicked")}
                dense
                key={key + 1}
              >
                <Checkbox
                  key={key + 2}
                  onClick={() => console.log("Checked")}
                  //   edge="start"
                  //   checked={checked.indexOf(value) !== -1}
                  //   tabIndex={-1}
                  disableRipple
                  //   inputProps={{ "aria-labelledby": labelId }}
                />

                <ListItemText className="item-list" key={key + 3}>
                  {task}
                </ListItemText>
              </ListItemButton>
              <Edit
                todoList={this.state.todoList}
                index={key}
                style={{ marginRight: "10px" }}
              >
                Edit
              </Edit>
              <Button
                onClick={() => {
                  this.delete(key);
                }}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>

        {!this.state.isClickedAdd && (
          <Button
            style={{ marginRight: "20px" }}
            variant="contained"
            onClick={() => {
              this.setState({
                doAddTask: true,
                isClickedAdd: true,
              });
            }}
          >
            Add Task
          </Button>
        )}

        {this.state.doAddTask && (
          <>
            <TextField
              id="outlined-basic"
              label="Please type your task"
              variant="outlined"
              onInput={this.newTask}
              size="small"
              style={{ width: "400px" }}
            />
            <Button
              style={{ marginLeft: "20px" }}
              onClick={() => {
                this.setState({
                  isAddDetails: true,
                });
              }}
            >
              Add Details
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              onClick={this.submitTask}
            >
              Submit
            </Button>
          </>
        )}
        {this.state.isAddDetails && (
          <TextField
            id="outlined-multiline-static"
            label="Details"
            multiline
            onInput={(e) => console.log(e.target.value)}
            rows={4}
            style={{ marginTop: "20px", width: "400px" }}
          />
        )}
      </section>
    );
  }
}

export default Todo;

// We will create a todo List

// - must be in react class components
// - we will be able to add tasks
// -modify
// - mark as done
// -delete tasks
// basic styles

// https://q-todoapp.netlify.app/#/
// https://my-todoslist-app.netlify.app/
// https://online-to-do-list.netlify.app/
// https://todolist.netlify.app/
// https://todo-app-react-js.netlify.app/login

// local storage
// https://www.netlify.com/with/react/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=143221562618&utm_term=deploy%20react%20app%20netlify&utm_content=aud-951962601255:kwd-1262801015200&creative=626376408409&device=c&matchtype=e&location=9060705&gclid=Cj0KCQiAqOucBhDrARIsAPCQL1bGHfjlpKTrovxnUod5kv0BPhcD_mK2m2Ucg3FZKaCqkorXDzLF8gkaAjZsEALw_wcB
