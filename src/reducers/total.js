import { UPDATE_TOTALSUM } from '../actions/actions';

const initialState = {
	totalSum: 0
}

const total = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_TOTALSUM :
			return {
				...state,
				totalSum: action.totalSum
			};
	}
	return state;
}

export default total