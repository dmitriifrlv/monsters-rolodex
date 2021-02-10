import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import { searchMonsters, requestMonsters } from './reducers';
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger =  createLogger();
const rootReducers = combineReducers({searchMonsters, requestMonsters})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store ={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
