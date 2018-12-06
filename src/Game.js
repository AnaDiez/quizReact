import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import './App.css';
import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';


export default class Game extends React.Component {
	render() {
		console.log(this.props.score)
		return (
			<div className="game">

				<div className="puntuacion" style={{display: this.props.fin ? 'block' : 'none' }}  >
					<h3> Has aacertado {this.props.score} preguntas </h3>
				</div>

				<div className="content" style={{display: this.props.fin ? 'none' : 'block' }}>
					<Content  question = {this.props.question} 
							  dispatch = {this.props.dispatch} 
							  currentQ = {this.props.currentQ}
							  />
				</div>

				<div className="actionbar">
					<Actionbar dispatch = {this.props.dispatch} 
								currentQ = {this.props.currentQ} 
								questions = {this.props.questions}
								score = {this.props.score}
								fin = {this.props.fin}
								 />
				</div>

			</div>
		);
	}
}