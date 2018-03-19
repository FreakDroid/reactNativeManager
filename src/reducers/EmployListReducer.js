import {
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            console.log('reducer ',action.employees);
            return action.employees;
        default:
            return state;
    }
}