import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
// import App from './components/App';
import './App.css'
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducer from './reducers';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
