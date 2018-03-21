import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Confirm } from './commons';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{
    state = { showModal: false}
    componentWillMount(){
        _.each(this.props.employee, (value, prop) =>{
            this.props.employeeUpdate({prop, value});
        })
    }
    onButtonPress(){
        const { name, phone, shift } = this.props;

        console.log(name, phone, shift);

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})

    }
    onText(){
        const { name, phone } = this.props;

        Communications.text(phone, `Hellos ${name}`);
    }
    onAccept(){
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline(){
        this.setState({ showModal: !this.state.showModal});
    }
    render(){
        console.log(this.props.employee);
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onText.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => {this.setState({ showModal: !this.state.showModal})}} >
                        Fire
                    </Button>
                </CardSection>

                <Confirm visible={this.state.showModal} 
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }; 
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);