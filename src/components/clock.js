import React, { Component } from 'react';


import moment from 'moment';


class App extends Component {
  constructor() {
  	super();
    
  	this.state = {
  		timeDays: 'waiting',
      timeHours: 'waiting',
      timeMins: 'minutes',
  	  timeSecs: 'seconds'
    }

    //this.findDiff = this.findDiff.bind(this);

    
  }

  componentDidMount() {

    this.timerID = setInterval(
      () => {
        let now = moment(new Date()) //todays date
        let end = moment("2018-03-04, 20:00");
        let duration = moment.duration(now.diff(end));

        // define variables
        let days, hours, minutes, seconds;

        // find days
        let exactDays = Math.abs(duration.days());
        if (exactDays < 10) {
          days = '0' + exactDays
        } else {
          days = exactDays;
        }

        // find hours
        let exactHours = Math.abs(duration.hours());
        if (exactHours < 10) {
          hours = '0' + exactHours
        } else {
          hours = exactHours;
        }

        // find minutes
        let exactMinutes = Math.abs(duration.minutes());
        if (exactMinutes < 10) {
          minutes = '0' + exactMinutes
        } else {
          minutes = exactMinutes
        }

        // find seconds
        let exactSeconds = Math.abs(duration.seconds());
        
        if (exactSeconds < 10) {
          seconds = '0' + exactSeconds
        } else {
          seconds = exactSeconds;
        }


        this.setState({
      
          timeDays: days,
          timeHours: hours,
          timeMins: minutes, 
          timeSecs: seconds
        })
      },  1000
     
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

/* FIGURE OUT HOW TO CALL THIS INSIDE COMPONENTDIDMOUNT
  findDiff() {
    // Event to count down to

    let now = moment(new Date()) //todays date
    let end = moment("2018-01-23, 9:00");
    let duration = moment.duration(now.diff(end));

    // find days
    let days = Math.abs(duration.days());

    // find hours
    let hours = Math.abs(duration.hours());

    // find minutes
    let minutes = Math.abs(duration.minutes());

    // find seconds
    let seconds = Math.abs(duration.seconds());

    this.setState({
  
      timeDays: days,
      timeHours: hours,
      timeMins: minutes, 
      timeSecs: seconds
    })
  }
*/

  render() {
    return (
      <div className="timer">
        <p>{this.state.timeDays}:{this.state.timeHours}:{this.state.timeMins}:{this.state.timeSecs}</p>
      </div>
    );
  }
}

export default App;