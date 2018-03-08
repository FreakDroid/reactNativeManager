import React,  { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import  reducers from './src/reducers';
import LoginForm from './src/components/loginForm';
import firebase from 'firebase';
import Router from './src/Router';

class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyB_QTgDAp6q-Nfcgo2swhPswk37AzOtJBo",
      authDomain: "manager-61b85.firebaseapp.com",
      databaseURL: "https://manager-61b85.firebaseio.com",
      projectId: "manager-61b85",
      storageBucket: "manager-61b85.appspot.com",
      messagingSenderId: "301867223371"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = { store }>
        <Router />
      </Provider>
    )
  }
}

export default App;