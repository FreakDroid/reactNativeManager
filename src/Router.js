import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/loginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';


const Routercomponent = () => {
    return(
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={ LoginForm } title='Please Login' />
                </Scene>

                <Scene key='main'>
                    <Scene 
                        renderRightButton={() => (
                            <View >
                            <TouchableOpacity onPress={() => { Actions.employeeForm() }}>
                                <Text>Add</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                        key='employeeList' 
                        component={ EmployeeList } 
                        title='Employee List' />

                    <Scene key="employeeForm" title="Employee Form" component={ EmployeeForm } />
                </Scene>
            </Scene>
        </Router>
    );
};

export default Routercomponent;