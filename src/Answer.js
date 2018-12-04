import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Answer extends React.Component {
	render() {
		return (
			<div> 
			<input type="text" value={this.props.question.userAnswer || ""} onChange={(e) => {
				this.props.onQuestionAnswer(e.target.value);
				}}/>
			</div>
		);
	}
}