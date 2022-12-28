import React from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.getDetails;

    return <div>{details}</div>;
  }
}

export default Details;
