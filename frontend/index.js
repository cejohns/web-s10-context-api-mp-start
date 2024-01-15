// index.js

import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { QuotesProvider } from './context/QuotesContext'; // Import your context provider

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <QuotesProvider> {/* Wrap your App component with the QuotesProvider */}
    <App />
  </QuotesProvider>
)
