import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.isLoggedIn, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return action.isLoggedIn;
        case types.LOGOUT_SUCCESS:
            return action.isLoggedIn;
        default:
            return state;
    }
}