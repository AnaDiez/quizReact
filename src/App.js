import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

class App extends Component {
  render() {
        return (
      <div>
          <Game question= {this.props.questions[this.props.currentQuestion]}
                dispatch = {this.props.dispatch}
                currentQ = {this.props.currentQuestion} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
