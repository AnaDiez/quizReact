import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Question extends React.Component {
	render() {
		return (
			<div> 
			{this.props.question.question}
			</div>
		);
	}
}