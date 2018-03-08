import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/loginForm';
import EmployeeList from './components/EmployeeList';
const Routercomponent = () => {
    return(
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={ LoginForm } title='Please Login' />
                </Scene>

                <Scene key='main'>
                    <Scene 
                        onRight = { () => { console.log('right!!!!!') }}
                        key='employeeList' 
                        component={ EmployeeList } 
                        title='Employee List' />
                </Scene>
            </Scene>
        </Router>
    );
};

export default Routercomponent;