import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Contact from './components/Contacts/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Contact />
      </div>
      
    );
  }
}

export default App;
