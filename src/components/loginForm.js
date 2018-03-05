import React, { Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import { Card, CardSection, Input, Button  } from './commons/index';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;
        console.log(this.props);

        // this.props.loginUser({email, password});
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={ this.props.email }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={ this.onPasswordChange.bind(this) }
                        value = { this.props.password }
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this) }>
                        login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);