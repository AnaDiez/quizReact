import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Question extends React.Component {
	render() {
		return (
			<div> 
				<h3>{this.props.question.question}</h3>
			</div>
		);
	}
}