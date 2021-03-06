import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';
import './AppFlux.css';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Content extends React.Component {
	render() {
		
		return (
			<div className="content" style={{display: this.props.fin ? 'none' : 'flex' }}>
				<div className="imagenBloque">
				<img src={this.props.question.attachment.url} className="imagenLinea" /> 
				</div>
				<div className="infoPregunta">
					<Question question = {this.props.question} />

					<Answer question = {this.props.question} 
							onQuestionAnswer = {(answer) => {
								this.props.dispatch(questionAnswer(this.props.currentQ, answer))
							}} 
							/>

					<Tips question = {this.props.question}/>
				</div>
			
			</div>
			
		);
	}
}