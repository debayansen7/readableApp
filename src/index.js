import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import allReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
