import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/style.scss'
import './index.css'
import { TechzziApp } from './TechzziApp.jsx'
import { Provider } from 'react-redux'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <TechzziApp />
      </Provider>
    </React.StrictMode>
)
