import "./App.css";
import Todo from "./NewComponents/Todo";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Todo />
      </div>
    );
    //
  }
}

export default App;
