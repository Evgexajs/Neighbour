import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import { Provider } from "react-redux"
import { applyMiddleware, createStore, compose } from "redux";
import  reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);