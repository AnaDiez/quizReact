import React from 'react';
import Button from './Button';
import {questionAnswer, changeQuestion,submit, initQuestions } from './redux/actions';
import $ from 'jquery';

export default class Actionbar extends React.Component {
	render() {
		return (
			<div className="actionbar"> 

			<Button nombre = "Anterior" 
					dispatch = {this.props.dispatch} 
					funcionClick = {() => {
						this.props.dispatch(changeQuestion(this.props.currentQ - 1))
					}}

					disable = {(this.props.currentQ == 0)||(this.props.fin)}
					/>

			<Button nombre = "Siguiente" 
					dispatch = {this.props.dispatch} 
					funcionClick = {() => {
						this.props.dispatch(changeQuestion(this.props.currentQ + 1))
					}}
					
					disable = {(this.props.currentQ == this.props.questions.length-1)||(this.props.fin)}
					/>

			<Button nombre = "Enviar" 
					dispatch = {this.props.dispatch} 
					funcionClick = {() =>{
						this.props.dispatch(submit(this.props.questions));
					}}
					disable = {false}
					/>

			<Button nombre = "Recargar" 
					dispatch = {this.props.dispatch} 
					funcionClick = {() =>{

					    var propsButton = this.props;

					    $.ajax({
					      url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=2a3ee8fe552579932c89",
					    })
					    .done(function( data ) {
					      //Funcion a la que se llama una vez haya funcionado el AJAX
					      propsButton.dispatch(initQuestions(data))
					      console.log(data)
					     });

				        this.timeOut = setTimeout(()=> {
				        //Función que se ejecuta cuando acaba el temporizador
				        this.props.dispatch(submit(this.props.questions))
				        console.log("Han pasado 10 seg")
				        }, 60000);


					}}
					disable = {false}
					/>

			</div>
		);
	}
}