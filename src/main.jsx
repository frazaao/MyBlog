import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'urql'
import { client } from './services/api'

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
