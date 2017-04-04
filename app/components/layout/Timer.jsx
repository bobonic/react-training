'use strict';

var React = require('react');

var Timer = React.createClass({
  
  getInitialState: function() {
    // initial vars
  	return {  
      state : 'session', value : 25 * 60 * 1000, initialStart : 25 * 60 * 1000,  
      time : new Date(25 * 60 * 1000), 
      started : false, 
      interval : null, 
      delay : 200, 
      clicks : 0, 
      timer : null,
      pause : 5, session : 25, color : '#E55451' 
    }; 
  },
  reset : function() {
      this.state.value = (this.state.state === 'session'? (this.state.session *60 * 1000) : (this.state.pause *60 *1000));
      this.state.initialStart = this.state.value;
      this.state.time = new Date(this.state.value);
      this.setState(this.state);
  },
  done : function() {
    if(this.state.state === 'session') {
      this.state.state = "pause";
      this.state.color = "#008080"; 
      this.state.value = this.state.pause *60 *1000;
    } else {
      this.state.state = "session";
      this.state.color= "#E55451";
      this.state.value = this.state.session *60 *1000;
    }
    this.state.initialStart = this.state.value;
    this.state.time = new Date(this.state.value);
    this.setState(this.state); 
  },
  run : function() {
       this.state.interval = setInterval(function(){
           this.state.value = this.state.value - 1000; 
           this.state.time = new Date(this.state.value);
           this.setState(this.state);
           if(this.state.time<=0){
              this.done(); 
           }
      }.bind(this), 1000);
     this.setState(this.state);
  },
  clickStart : function(){
    this.setState(this.state);
        this.state.timer = setTimeout(function() {
          this.state.clicks = 0;  // reset counter
          if(this.state.started === false) { // start the timer
            this.state.started = true;
            this.setState(this.state);
            this.run(); 
          } else {
            this.state.started = false;
            clearInterval(this.state.interval);
            this.setState(this.state);
          }
        }.bind(this), this.state.delay);
        this.setState(this.state);
  },
  clickStop : function(){
      this.state.clicks++;  // clicks no
      this.setState(this.state);
        this.state.timer = setTimeout(function() {
          this.state.clicks = 0;  // reset counter
            this.state.started = false;
            clearInterval(this.state.interval);
            this.setState(this.state);
          
        }.bind(this), this.state.delay);
        this.setState(this.state);
      
  },
  clickReset : function(){
      
      this.setState(this.state);
      clearTimeout(this.state.timer); 
      this.state.started = false;
      clearInterval(this.state.interval);
      this.reset();
  },
  clickPomodoro : function(){
    this.state.session = parseInt(25);
    this.reset();
  },
  clickShortBreak : function(){
    this.state.session = parseInt(5);
    this.reset();
  },
    clickLongBreak : function(){
    this.state.session = parseInt(15);
    this.reset();
  },
  handlePauseChange: function(e){
		if(this.state.started === false){
      this.state.pause = parseInt(e.target.value);
  	  this.reset();
    }
 	},
  handleSessionChange: function(e){
		if(this.state.started === false){
      this.state.session = parseInt(e.target.value);
  	  this.reset();
    }
 	},
  render : function(){
    var minutes = this.state.time.getMinutes();
    minutes = (minutes < 10)?"0"+minutes:minutes;
    var seconds = this.state.time.getSeconds();
    seconds = (seconds < 10)?"0"+seconds:seconds;
    var fill = { 
      'height' : ((100-((this.state.initialStart-this.state.value)*100/this.state.initialStart)).toFixed(2)) + '%',
      'backgroundColor'  : this.state.color
    };
    var border = {
      'border' : '2px solid ' + this.state.color,
    }
    var show = minutes + ' : ' + seconds;
    var key = show + this.state.session;
    return (
      <div>
        <div className="btn-group">
            <label className="btn btn-primary">
              <input type="radio" name="timerOptions" id="rdPomodoro" onClick={this.clickPomodoro} /> Pomodoro 
            </label>

            <label className="btn btn-primary">
              <input type="radio" name="timerOptions" id="rdShortBreak" onClick={this.clickShortBreak} /> Short Break
            </label>

            <label className="btn btn-primary">
              <input type="radio" name="timerOptions" id="rdLongBreak"  onClick={this.clickLongBreak} /> Long Break
            </label>
        </div>
        <div id="clock" style={border}>
          <div className="inner" style={fill}>
            <span>{show}</span>
          </div>
        </div>
        
        <div className="btn-group" role="group" >
          <button type="button" className="btn btn-primary" onClick={this.clickStart}>Start</button>
          <button type="button" className="btn btn-danger" onClick={this.clickStop}>Stop</button>
          <button type="button" className="btn btn-warning" onClick={this.clickReset} >Reset</button>
        </div>

        <div id="options" style={{display: 'none'}}>
          <span>Session</span>
          <input className="session" type="number" value={this.state.session} min="1" max="60" onChange={this.handleSessionChange}/> 
          <span>Break</span>
          <input className="break" type="number" value={this.state.pause} min="1" max="60" onChange={this.handlePauseChange}/>
        </div>
      </div>
    )
  }
});

module.exports = Timer;