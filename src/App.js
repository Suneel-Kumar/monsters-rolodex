// import React from 'react';
// // import logo from './logo.svg';

// function App() {
//   return (
//     <div>
//       Welcome to the world of React.
//     </div>
//   )
// }

// export default App

/** Class Component */
import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./component/search-box/search-box.component";
import { CardList } from "./component/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => this.setState({ monsters: result }));
  }

  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };

  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(SearchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
