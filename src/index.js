import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import './App.css'
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import allReducer from './reducers';
// import logger from 'redux-logger'

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
// const enhancer = applyMiddleware(thunk);
const enhancer = composeEnhancers(applyMiddleware(thunk));
// const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(allReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
