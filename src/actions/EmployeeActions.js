import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVED_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    let { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`).push({ name, phone, shift })
        .then(() => { 
            dispatch({ type: EMPLOYEE_CREATE })
            Actions.pop();
        });
    }
}

export const employeeFetch = () => {
    let { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`).on('value', snapshot =>{
            console.log("llegue de firebase ", snapshot.val());
            dispatch({ type: EMPLOYEE_FETCH_SUCCESS, employees: snapshot.val()});
        })
    }
}

export const employeeSave = ({ name, phone, shift, uid}) =>{
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift})
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVED_SUCCESS});
            Actions.pop();
        })
    }
}