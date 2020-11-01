import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevToos } from 'redux-devtools-extension'
import { rootReducer } from './Reducers/rootReducer'
import App from './Components/App';


// store

const store = createStore(
  rootReducer,
  composeWithDevToos(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("root")
)