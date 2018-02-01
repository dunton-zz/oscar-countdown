import React, { Component } from 'react';
import SoundBar from './components/sound'
import Clock from './components/clock';
class App extends Component {
 

  render() {
    return (
      <div className="background">
        <div className="theatre">
          <em className="curtain-left"></em>
          <em className="curtain-right"></em>
          <p className="header-text">COUNTDOWN TO THE OSCARS!!!</p>
          <Clock />
        </div>
        <div>
          <SoundBar />
        </div>
      </div>

      
    );
  }
}

export default App;
