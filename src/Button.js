import React from 'react';

export default class Button extends React.Component {
		
	render() {

		return (
			
			<button onClick={this.props.funcionClick} disabled={this.props.disable}>{this.props.nombre}</button>
			
		);
	}
}