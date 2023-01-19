import { robots } from "./robots";
import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
    
  }
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <h1 className="m-2 text-center">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
};

export default App;

