import React, { Component } from "react";
import '../container/style.css'

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() -this.state.timerStart
      });
    }, 10);
  };
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  
  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn:false,
      timerStart: 0,
      timerTime: 0
    });
  };
  
  render() {
    const { timerTime } = this.state;
let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        
        <div className="Stopwatch-display">
          <div className="stopwatch-time">
  {hours} : {minutes} : {seconds} : {centiseconds}
  </div>
  {this.state.timerOn === false && this.state.timerTime === 0 && (
  <button  class="btn"onClick={this.startTimer}>Start</button>
)}
{this.state.timerOn === true && (
  <button class="btn" onClick={this.stopTimer}>Stop</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button class="btn" onClick={this.startTimer}>Res</button>
)}
{
  <button class="btn" onClick={this.resetTimer}>Reset</button>
}
</div>
      </div>
    );
  }
}export default Stopwatch;