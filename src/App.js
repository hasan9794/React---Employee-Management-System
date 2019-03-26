import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginForm 
            imgURL={logo}
          />
      </div>
    );
  }
}

export default App;
