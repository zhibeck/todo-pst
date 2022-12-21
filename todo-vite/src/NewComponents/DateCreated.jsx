import React from "react";

class DateCreated extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Date = this.props.getDate;

    const month = Date.toLocaleString("en-US", { month: "long" });
    const day = Date.toLocaleString("en-US", { day: "2-digit" });
    const year = Date.getFullYear();

    return (
      <div className={this.props.className}>
        created on {month} {day} {year}
      </div>
    );
  }
}

export default DateCreated;
