import React from "react";
import { Button } from "@mui/material";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  edit = () => {
    console.log(this.props.todoList);
    console.log(this.props.index);
    console.log("Edit");
  };

  render() {
    return <Button onClick={this.edit}>Edit</Button>;
  }
}

export default Edit;
