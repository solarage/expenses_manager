import React from 'react';

class Button extends React.Component {
	render() {
		const { onActionExpense } = this.props
		return(
			<button className="mdc-button mdc-button--outlined mdc-button--dense" onClick={onActionExpense}>{this.props.btnName}</button>	
		)
	}
}

export default Button;