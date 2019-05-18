import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: []
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.add = this.add.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  onHandleChange(e) {
    this.setState({ todo: e.target.value });
  }

  add() {
    const { list, todo } = this.state;
    const newList = [...list];
    newList.push(todo);
    this.setState({ list: newList });
  }

  deleteAll() {
    this.setState({ list: [] });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>To do list</h1>

        <div className="Formulario">
          <input
            onChange={this.onHandleChange}
            type="text"
            id="description"
            placeholder="Description"
          />
          <button onClick={this.add}>Add</button>
          <button id="deleteAll" name="deleteAll" onClick={this.deleteAll}>
            Delete All
          </button>
        </div>

        {list.length > 0 ? (
          <div>
            <p>All items listed</p>
            {list.map((data, index) => (
              <p key={`item-${index}`}>{data}</p>
            ))}
          </div>
        ) : (
          <p>No Items</p>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
