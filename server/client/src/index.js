import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers'



const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDom.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('our environment is', process.env.NODE_ENV);
