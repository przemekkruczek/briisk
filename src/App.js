import React from "react";
import { Movielist } from "./Movielist";
import { Input } from "./Input";
import "./App.css";

class App extends React.Component {
  term = term => {
    console.log(term);
  };
  render() {
    return (
      <div className="App">
        <Movielist />
        <Input term={this.term} />
      </div>
    );
  }
}

export default App;
