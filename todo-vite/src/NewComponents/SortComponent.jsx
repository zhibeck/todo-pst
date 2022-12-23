import React from "react";
import { Button } from "@mui/material";

class SortComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedTasks: [],
    };
  }

  sortCompletedTasks = () => {
    console.log("Sorted");
  };

  render() {
    return <Button onClick={this.sortCompletedTasks}>Completed</Button>;
  }
}

export default SortComponent;
