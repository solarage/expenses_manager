import React from 'react';
import Button from './Button';


class Expense extends React.Component {

	render() {
		const { saveExpense, dscrInputRef, sumInputRef, dateInputRef, btnName, defaultName, defaultNumber, defaultDate } = this.props;
		return(
			<div>
				<form className="expense_form" onSubmit={saveExpense}>
					<div className="mdc-text-field">
						<input ref={dscrInputRef} className="expense-descr mdc-text-field__input" type="text" placeholder="name" maxLength="25" defaultValue={defaultName} ></input>
					</div>
					<div className="mdc-text-field">
						<input ref={sumInputRef} className="expense-sum mdc-text-field__input" type="number" placeholder="$" max="1000000000" defaultValue={defaultNumber}></input>
					</div>
					<div className="mdc-text-field">
						<input ref={dateInputRef} className="expense-date mdc-text-field__input" type="date" defaultValue={defaultDate}></input>
					</div>
					<Button type="submit" btnName={btnName} />
				</form>
			</div>
		)
	}
	
}

export default Expense;