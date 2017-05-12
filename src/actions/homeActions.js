import axios from 'axios';
import * as types from '../constants/actionTypes';

//retrieve courses
export function retrieveCoursesSuccess(res) {
	return {
		type: types.RETRIEVE_COURSE_DETAILS,
		coursesData: res.data
	};
}

export function retrieveCourses() {
	return function (dispatch) {
		return axios.get(`Your url here`)
		.then(res => {
			dispatch(retrieveCoursesSuccess(res));
		})
		.catch(error => {
			console.log(error); //eslint-disable-line
		});
	};
}

