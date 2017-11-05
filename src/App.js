import React, { Component } from 'react';
import firebase from 'firebase';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import IndexContainer from './containers/IndexContainer';
import SignupsContainer from './containers/SignupsContainer';
import './App.css';

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
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <IndexContainer db={firebase} />} />
          <Route exact path='/signups/' component={() => <SignupsContainer db={firebase} />} />
          <Route render={function renderNotFound() {
              return (
                <p>Not found</p>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
