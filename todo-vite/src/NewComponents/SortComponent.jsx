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
    const tasks = this.props.tasks;

    const filteredData = tasks.filter((elem) => elem.isComplete == true);

    this.props.onCompleteFilter(filteredData);
  };

  render() {
    return <Button onClick={this.sortCompletedTasks}>Completed</Button>;
  }
}

export default SortComponent;
