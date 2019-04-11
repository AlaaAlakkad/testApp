import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Clock from './TestApp';
import newInput from './InputAction';

class App extends Component {
  constructor(props){
    super(props);
    this.onNewInput= this.onNewInput.bind(this);
  }
  onNewInput(e){
    this.props.onNewInput(e.target.value)
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Clock/>
          <input onChange={this.onNewInput}></input>
          <div>{this.props.clock}</div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return state;
}
const mapDispatchToProps = {
  onNewInput: newInput
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
