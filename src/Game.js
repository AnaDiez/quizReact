import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import './AppFlux.css';
import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';


export default class Game extends React.Component {
	render() {

		return (
			<div className="game">
				<h1 className="titulo">¡Bienvenido a Quizz!</h1>
				<h3 className="titulo"> Tienes 1 minuto para contestar 10 preguntas </h3>

				<div className="puntuacion" style={{display: this.props.fin ? 'flex' : 'none' }}  >
					<h2> ¡TIEMPO! </h2>
					<h3> Has acertado {this.props.score} preguntas </h3>
				</div>

				<Content  question = {this.props.question} 
						  dispatch = {this.props.dispatch} 
						  currentQ = {this.props.currentQ}
						  fin = {this.props.fin}
						  />
				

				<Actionbar dispatch = {this.props.dispatch} 
							currentQ = {this.props.currentQ} 
							questions = {this.props.questions}
							score = {this.props.score}
							fin = {this.props.fin}
							 />
				

			</div>
		);
	}
}