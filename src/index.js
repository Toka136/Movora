import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  store ,{ persistor } from './store-api/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
      </Provider>
      </BrowserRouter>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
