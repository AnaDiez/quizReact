import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

class App extends Component {
  render() {
        return (
      
          <Game question= {this.props.questions[this.props.currentQuestion]}
                dispatch = {this.props.dispatch}
                currentQ = {this.props.currentQuestion}
                questions = {this.props.questions}
                score = {this.props.score} 
                fin = {this.props.finished} />
      
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
