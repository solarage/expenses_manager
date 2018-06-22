import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/actions';
import Expense from '../components/Expense';
import { getRandomId, getYMDDate } from '../helpers/helpers';

class AddExpense extends React.Component {
	constructor(props) {
		super(props)
			this.newExpense = {};
			this.dscrInput = null;
			this.sumInput = null; 
			this.dateInput = null;
		
	}

	render() {
		return(
			<div>
				<h3>Add expense</h3>
				<Expense expensesActions={this.expensesActions}
						 expensesState={this.expensesState}
						 defaultDate={getYMDDate(this)} 
						 btnName="Add" 
						 saveExpense={this.handleSubmit} 
						 dscrInputRef={node => {this.dscrInput = node}} 
						 sumInputRef={node => {this.sumInput = node}} 
						 dateInputRef={node => {this.dateInput = node}} 
						 
				/>
			</div>
		)
	}


	handleSubmit = (e) => {
		e.preventDefault();

		if(!this.dscrInput.value.trim() || !this.sumInput.value.trim() || !this.dateInput.value.trim()) {
			return
		}
		this.newExpense.id = getRandomId();

		this.newExpense.dscrInput = this.dscrInput.value
		this.dscrInput.value = '';

		this.newExpense.sumInput = +this.sumInput.value
		this.sumInput.value = '';

		this.newExpense.dateInput = this.dateInput.value
		this.dateInput.value = '';

		this.props.dispatch(addExpense(this.newExpense));
		this.goToHome();

	}

	goToHome = () => {
		this.props.history.push("/");
	}	

}


AddExpense = connect()(AddExpense)

export default AddExpense;