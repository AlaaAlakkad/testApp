import React, { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timer: null };
    this.stopOrStart = this.stopOrStart.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.state.timer
        ? new Date(this.state.timer + 1000)
        : new Date(this.state.date.getTime() + 1000)
    });
    this.setState({
      timer: 0
    });
  }

  stopOrStart() {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.setState({
        timer: this.state.date.getTime()
      });
      this.timerID = null;
      return;
    }
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  render() {
    return (
      <div>
        <h4>Date</h4>
        {this.state.date.toLocaleString()}
        <div>
          <button onClick={this.stopOrStart}>button</button>
        </div>
      </div>
    );
  }
}

export default Clock;
