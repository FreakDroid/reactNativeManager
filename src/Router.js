import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/loginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreate from './components/EmployeeCreate';


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
                            <TouchableOpacity onPress={() => { Actions.employeeCreate() }}>
                                <Text>Add</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                        key='employeeList' 
                        component={ EmployeeList } 
                        title='Employee List' />

                    <Scene key="employeeCreate" title="Employee Form" component={ EmployeeCreate } />
                    <Scene key="employeeEdit" title="Employee Form" component={ EmployeeEdit } />
                </Scene>
            </Scene>
        </Router>
    );
};

export default Routercomponent;