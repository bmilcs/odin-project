import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listArray: [],
      inputValue: "",
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAddTask(e) {
    e.preventDefault();
    const { inputValue, listArray } = this.state;

    inputValue
      ? this.setState({
          listArray: [...listArray, inputValue],
          inputValue: "",
        })
      : alert("Error: Please input something!");
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const divStyles = {
      padding: "1rem",
      display: "grid",
      gap: ".25rem",
      font: "inherit",
      fontSize: "1rem",
      fontFamily: "Arial",
    };

    return (
      <div style={divStyles}>
        <label htmlFor="task-input">Task Description</label>
        <input
          type="text"
          id="task-input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleAddTask}>Add Task</button>
        <Overview list={this.state.listArray}></Overview>
      </div>
    );
  }
}

export default App;
