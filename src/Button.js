import React from 'react';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {
			enable: true
		}
		};
		
	
	render() {
		return (
			
			<button onclick="console.log(hkj)">{this.props.nombre}</button>
			
		);
	}
}