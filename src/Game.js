import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';


export default class Game extends React.Component {
	render() {
		return (


/*
			<div> {this.props.question.question} 
			  <input type="text" value={this.props.question.userAnswer || ''} onChange={(e) => {
				this.props.onQuestionAnswer(e.target.value);
			  }}/>
			</div>
*/
			<div>
			<Content  question = {this.props.question} 
					  dispatch = {this.props.dispatch} 
					  currentQ = {this.props.currentQ}/>
			<Actionbar dispatch = {this.props.dispatch} currentQ = {this.props.currentQ} />
			</div>
		);
	}
}