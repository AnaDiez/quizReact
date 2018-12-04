import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Content extends React.Component {
	render() {
		console.log(this.props.question)
		return (
			<div> 
			<Question question = {this.props.question} />
			<Answer question = {this.props.question} 
					onQuestionAnswer = {(answer) => {
						this.props.dispatch(questionAnswer(this.props.currentQ, answer))
					}} 
					/>
			<Tips question = {this.props.question}/>
			
			
			<img src={this.props.question.attachment.url}/>
			</div>
			
		);
	}
}