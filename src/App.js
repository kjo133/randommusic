import React, { Component } from "react";
import "./App.css";
import RandomMusic from "./components/RandomMusic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create Random Music</h1>
        <h2>About</h2>
        <p>
          I want to explore the various sounds that Logic Pro has to offer.
          Decided to create this random sounds app that will choose a variey of
          midi sounds to experiment with
        </p>
        <h2>Rules</h2>
        <p>
          Must use all of options that are given in some way to create a piece
          of music
        </p>
        <RandomMusic />
      </div>
    );
  }
}

export default App;
