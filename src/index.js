import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react'
import history from './components/History/History';
import {Provider} from 'react-redux';
import store, { presistor } from './Redux/store';
import ModalManager from './components/ModalManager/ModalManager';
import { Router } from 'react-router';

ReactDOM.render(
  <Router history = {history}>

  <Provider store={store}>
    
    <PersistGate persistor = {presistor}>

    <ModalManager/>
    <App/>
    
    </PersistGate>
  
  </Provider>
    
      </Router>
  ,
  document.getElementById('root')
);

