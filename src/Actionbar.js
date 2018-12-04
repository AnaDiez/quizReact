import React from 'react';
import Button from './Button';
import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Actionbar extends React.Component {
	render() {
		return (
			<div> 
			<Button nombre = "Anterior" dispatch = {this.props.dispatch} onClick = {() => {
						this.props.dispatch(changeQuestion(this.props.currentQ - 1))
					}}/>
			<Button nombre = "Siguiente" dispatch = {this.props.dispatch} onClick = {() => {
						this.props.dispatch(changeQuestion(this.props.currentQ + 1))
					}}/>
			<Button nombre = "Submit" dispatch = {this.props.dispatch} />
			</div>
		);
	}
}