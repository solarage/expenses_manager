import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/actions';
import Expense from '../components/Expense';


class EditExpense extends React.Component {
	constructor(props) {
		super(props)
			this.newExpense = {};
			this.dscrInput = null;
			this.sumInput = null; 
			this.dateInput = null;
		
	}

	render() {
		const { editedExpense } = this.props;
		return(
			<div>
				<h3>Edit expense</h3>
				<Expense defaultName={editedExpense.description} 
						 defaultNumber={editedExpense.sum} 
						 defaultDate={editedExpense.date} 
						 expensesActions={this.expensesActions} 
						 expensesState={this.expensesState} 
						 btnName="Save" 
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
		this.newExpense.id = this.props.editedExpense.id;

		this.newExpense.dscrInput = this.dscrInput.value
		this.dscrInput.value = '';

		this.newExpense.sumInput = +this.sumInput.value
		this.sumInput.value = '';

		this.newExpense.dateInput = this.dateInput.value
		this.dateInput.value = '';

		this.props.dispatch(editExpense(this.newExpense));
		this.goToHome();
	}

	goToHome = () => {
		this.props.history.push("/");
	}	

}

const mapStateToProps = (state, ownProps) => {
	return {
		editedExpense: state.expenses.find(expense => expense.id === +ownProps.match.params.id)
	}
}



EditExpense = connect(mapStateToProps)(EditExpense)

export default EditExpense;