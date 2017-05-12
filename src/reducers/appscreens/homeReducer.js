import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.projectData, action) {
    switch (action.type) {
        case types.RETRIEVE_COURSE_DETAILS:
			return {
				...state
			};
       default:
			return state;
    }
}
