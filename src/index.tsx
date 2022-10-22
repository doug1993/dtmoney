import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {createServer,Model} from 'miragejs'

createServer({
  models:{
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [ 
        {
          id: 1,
          title: 'Frelance',
          type: 'deposit',
          amount: 5000 ,
          category: 'Dev',
          createdAt : new Date('2022-06-20 10:15:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
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
