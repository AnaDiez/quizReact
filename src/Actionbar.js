import React from 'react';
import Button from './Button';
import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Actionbar extends React.Component {
	render() {
		return (
			<div> 

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

			<Button nombre = "Submit" 
					dispatch = {this.props.dispatch} 
					funcionClick = {() =>{
						this.props.dispatch(submit(this.props.questions));
					}}
					disable = {false}
					/>

			</div>
		);
	}
}