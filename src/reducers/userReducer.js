import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
	switch(action.type) {
		default:
			return state;
	}
}
