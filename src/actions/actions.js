export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const UPDATE_TOTALSUM = 'UPDATE_TOTALSUM';
export const UPDATE_SORTFIELD = 'UPDATE_SORTFIELD';
export const UPDATE_FILTERFIELD_FROM = 'UPDATE_FILTERFIELD_FROM';
export const UPDATE_FILTERFIELD_TO = 'UPDATE_FILTERFIELD_TO';

//


export const addExpense = (expense) => {
	return {
		type: ADD_EXPENSE,
		id:  expense.id,
		description: expense.dscrInput,
		sum: expense.sumInput,
		date: expense.dateInput
	}
}

export const editExpense = (newExpense) => {
	return {
		type: EDIT_EXPENSE,
		id: newExpense.id,
		description: newExpense.dscrInput,
		sum: newExpense.sumInput,
		date: newExpense.dateInput

	}
}

export const deleteExpense = (id) => {
	return {
		type: DELETE_EXPENSE,
		id: id

	}
}


//


export const updateTotalSum = (totalSum) => {
	return {
		type: UPDATE_TOTALSUM,
		totalSum: totalSum
	}
}

export const updateSortField = (sortBy) => {
	return {
		type: UPDATE_SORTFIELD,
		sortBy: sortBy
	}
}

export const updateFilterFieldFrom = (from) => {
	return {
		type: UPDATE_FILTERFIELD_FROM,
		from: from,
	}
}

export const updateFilterFieldTo = (to) => {
	return {
		type: UPDATE_FILTERFIELD_TO,
		to: to
	}
}