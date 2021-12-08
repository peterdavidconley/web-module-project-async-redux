import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import App from './App';
import './index.css';

import { reducer } from './reducers/reducers';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
