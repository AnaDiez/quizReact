import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Tips extends React.Component {
	render() {
		return ( 	
			<div>

				<h3>Tips:</h3>
				<h5 style={{display: this.props.question.tips.length ? 'none' : 'block' }}>No hay pistas</h5>
				{this.props.question.tips.map((tip,index)=>{
					return <li key={index}>{tip}</li>;
				})}
			
			</div>
		);
	}
}

