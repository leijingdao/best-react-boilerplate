import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount(){
    console.log(123);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="http://www.baidu.com">baidu</a>
      </div>
    );
  }
}

export default App;
