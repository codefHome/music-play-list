import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Toaster } from 'react-hot-toast'
import Header from './Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
    <App />
  
    </Provider>
    <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                style: {
                  color: '#fff' ,
                  background: '#181A1C',
                },
              }}
            />
    </BrowserRouter>
  // </React.StrictMode>,
)
