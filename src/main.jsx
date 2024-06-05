import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import global_az from './components/translations/az/global.json'
import global_en from './components/translations/en/global.json'
import global_ru from './components/translations/ru/global.json'
import { I18nextProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <I18nextProvider>
      <App />
  // </I18nextProvider>
)
