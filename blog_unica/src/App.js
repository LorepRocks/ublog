import React, { Component } from 'react';
import Navigation from './components/navigator';
import Menu from './components/menu';
import Card from './components/card';
//import './stylesheets/card_list.css';
import logo from './logo.svg';
import './stylesheets/main.scss'
//import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Navigation/>
        <Card/>
      </div>
    );
  }
}

export default App;
