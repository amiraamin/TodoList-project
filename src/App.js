import React from "react";
import "./App.css";
import TodoItems from "./Component/TodoItems/TodoItems";
import AddItem from "./Component/AddItem/AddItem";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Amena", age: 20 },
      { id: 2, name: "jory", age: 50 },
      { id: 3, name: "Adhm", age: 10 },
      { id: 4, name: "Ali", age: 10 }
    ]
  };
  // deleteItem = id => {
  //   let items = this.state.items;
  //   let i = items.findIndex(item => item === id);
  //   items.splice(i, 1);
  //   this.setState({ items });
  // };

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> TodoList</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />

        <AddItem addItem={this.addItem} />
      </div>
    );
  }
  // function (addItem) to add the created item to my Array
  // math.rondom to prevent key error.
  //(items) catch all the items i have first
  //push : i want to add my new item to "array"
  addItem = item => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  deleteItem = id => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };
}

export default App;
