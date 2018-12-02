import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

  
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDI--lSfRV24EkV4R3U1Xz45MpBHVUb51Y",
      authDomain: "auth-f761c.firebaseapp.com",
      databaseURL: "https://auth-f761c.firebaseio.com",
      projectId: "auth-f761c",
      storageBucket: "auth-f761c.appspot.com",
      messagingSenderId: "843526710160"
    };
    firebase.initializeApp(config);
  
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
