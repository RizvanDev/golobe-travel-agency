import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'
import './globalStyles/index.scss'

const store = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
