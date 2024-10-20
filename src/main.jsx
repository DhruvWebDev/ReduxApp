import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider is about to give access to this store to all the elements in the code
    so that they can use the store to get the state and dispatch actions */}
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
)
