import React from "react";
import "./Details.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.getDetails;

    return <div className="task-details">{details}</div>;
  }
}

export default Details;
