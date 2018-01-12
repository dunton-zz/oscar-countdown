import React, { Component } from 'react';
import logo from './logo.svg';

import moment from 'moment';
import Clock from './components/clock';
import Background from './components/background'


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="background">
        <div className="theatre">
          <em className="curtain-left"></em>
          <em className="curtain-right"></em>
          <p className="header-text">COUNTDOWN TO THE OSCAR NOMINATIONS!!!</p>
          <Clock />
        </div>
        
      </div>
    );
  }
}

export default App;
