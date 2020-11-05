import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import App from './Components/App';
import { rootReducer } from './Reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom'

// store

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider >,
  document.getElementById("root")
)