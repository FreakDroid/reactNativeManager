import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeFormReducer';
import EmployeeList from './EmployListReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeReducer,
    employeeList: EmployeeList,
});