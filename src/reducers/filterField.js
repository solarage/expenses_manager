import { UPDATE_FILTERFIELD_FROM, UPDATE_FILTERFIELD_TO } from '../actions/actions';

const initialState = { 
	from: new Date('2018-01-01'), 
	to: new Date() 
};

if (localStorage.getItem('filterField')) {
	const local = JSON.parse(localStorage.getItem('filterField'));
	const localStObjDateFrom = new Date(local.from);
	const localStObjDateTo = new Date(local.to);
	initialState.from = localStObjDateFrom;
	initialState.to = localStObjDateTo;
}


const filterField = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_FILTERFIELD_FROM : 
			return {
				...state,
				from: action.from
			};

		case UPDATE_FILTERFIELD_TO : 
			return {
				...state,
				to: action.to
			};
	};


	return state;
}

export default filterField