import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './commons';
import EmployeeCreate from './EmployeeCreate';

class EmployeeForm extends Component{

    render(){
        console.log(this.props.employee);
        return(
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Jane"  value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input label="Phone" placeholder="555-555-555" value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection >
                    <Text style={ style.pickerTextStyle} >Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                        style={{flex:1}}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}
const style = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapToStateProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapToStateProps, { employeeUpdate })(EmployeeForm);