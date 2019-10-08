import React, { Component } from "react";
import "./AddItem.css";
class AddItem extends Component {
  state = {
    name: "",
    age: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (e.target.name.value === "") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: ""
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Email"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <input
            type="number"
            placeholder="Enter your Age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          ></input>
          <input type="submit" placeholder="Enter your Age" value="Add"></input>
        </form>
      </div>
    );
  }
}
export default AddItem;
