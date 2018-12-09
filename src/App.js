import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";


import {questionAnswer, changeQuestion,submit, initQuestions } from './redux/actions';
import $ from 'jquery';

class App extends Component {

  componentDidMount(){
    //Meter aqui la petición AJAX
    $.ajax({
      url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=2a3ee8fe552579932c89",
    })
    .done(( data )=> {
      //Funcion a la que se llama una vez haya funcionado el AJAX
      this.props.dispatch(initQuestions(data))
      console.log(data)
    });
    this.timeOut = setTimeout(()=> {
      //Función que se ejecuta cuando acaba el temporizador
      this.props.dispatch(submit(this.props.questions))
      }, 60000);

  }
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
