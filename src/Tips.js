import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from './redux/actions';

export default class Tips extends React.Component {
	render() {
		return ( 	
			<div>
			Tips:

			{this.props.question.tips.map((tip,index)=>{
				return <li>{tip}</li>;
			})}
			
			</div>
		);
	}
}