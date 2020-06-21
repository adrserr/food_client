import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import store from './store'
import { I18nProvider } from './components'

ReactDOM.render(
  <Provider store={store}>
    <I18nProvider>
      <App />
    </I18nProvider>
  </Provider>,
  document.getElementById('root')
)
