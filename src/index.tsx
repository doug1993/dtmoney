import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions', ()=>{
      return[
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          category:'Food',
          createAT: new Date()
          
        }
      ]
    })
  }
})

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
