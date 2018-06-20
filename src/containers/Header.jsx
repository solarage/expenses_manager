import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateSortField } from '../actions/actions';
import Button from '../components/Button';
import { getTotalSum  } from '../helpers/helpers';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: "default"}
	}


	render() {
		const { expensesState, totalState } = this.props;
		console.log('totalSum', totalState.totalSum)
		return (
		  <div className="header">
			<div className="sort mdc-select">
				<select className="mdc-select__native-control" value={this.state.value} onChange={this.handleSortChange}>
					<option value="default" disabled >Sort by</option>
					<option value="date">date</option>
					<option value="sum">sum</option>
				</select>
				<div className="mdc-line-ripple"></div>
			</div>
			<Link to="/add"><Button btnName="Add" /></Link>
			<div className="total">Total: {getTotalSum(expensesState,"sum")}</div>
		  </div>
		  
		);
	}
	
	handleSortChange = (event) => {
		let sortBy = event.currentTarget.value;
		this.setState({value: event.currentTarget.value});
		this.props.dispatch(updateSortField(sortBy));
	}

}

export default connect()(Header);