import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hackers extends Component{
  render() {
    return (
      <div>
        <h2> Numbers of Hackers </h2>
        <p>{this.props.hackers}</p>
      </div>
    );
  }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hackers: 999,
    }
  }
}

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and Press to reload.
          </p>
          <h1> FOR TEST!</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
      <div>
        <h1>Hello World!</h1>
        <Hackers />
      </div>
    );
  }
}

export default App;
