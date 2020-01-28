// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import store from '../store';
import NavBar from './NavBar';
import Hotels from './components/hotels/HotelsContainer';
import Guests from './components/guests/GuestsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <div className="container">
        <h1>Micro-Frontend Boilerplate</h1>
        <Router>
          <NavBar />
          <Route path="/hotels" component={Hotels} />
          <Route path="/guests" component={Guests} />
        </Router>
      </div>
    </Provider>,
    root
  );
}