import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: 'ottoradiotest-69a70.firebaseapp.com',
      databaseURL: 'https://ottoradiotest-69a70.firebaseio.com',
      projectId: 'ottoradiotest-69a70',
      storageBucket: 'ottoradiotest-69a70.appspot.com',
      messagingSenderId: '291405510379',
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className='App'>
        <FormContainer db={firebase} />
        <div className='Book-cover' />
      </div>
    );
  }
}

export default App;
