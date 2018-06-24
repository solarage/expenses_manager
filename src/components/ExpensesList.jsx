import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class ExpensesList extends React.Component {

	render() {
		const { deleteExpense, sortedExpensesState, filteredExpensesState } = this.props;
		return (
			<div className="expenses_table">
				<div className="titles">
					<span>Описание /</span>
					<span> Сумма</span>
				</div>
				{filteredExpensesState.map(expense => 
					<div key={expense.id} {...expense} className="expense">
						<span>{expense.description}</span> 
						<span className="sum">{expense.sum}</span>
						<Link to={`/edit/${expense.id}`}><Button btnName="Edit" type="button" /></Link>
						<Button btnName="Delete" type="button" onActionExpense={deleteExpense} />
					</div>
				)}	
			</div>
		)
	}

}

export default ExpensesList;