import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
         <ChatBot steps={steps} />
      </div>
    );
  }
}

export default App;
