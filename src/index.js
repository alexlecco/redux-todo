import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

const store =
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
