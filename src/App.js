import { robots } from "./robots";
import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const state = {
    robots: robots,
    searchfield: ''
}

const App = () => {
  return (
    <div>
      <h1 className="m-2 text-center">Robo Friends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;

