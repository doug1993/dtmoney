import React from 'react';
import ReactDOM from 'react-dom';
import {createServer,Model} from 'miragejs'
import App from './App';

createServer({
  //para usar o DB do mirage internamente
  models: {
    transaction: Model,

  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title:'Frelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-11-30 09:00:00' )
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transactions',()=>{
      return this.schema.all('transaction')
      
    })
    this.post('/transactions',(schema,req)=>{
      const data = JSON.parse(req.requestBody)

      //faz parte do DB armazanamento de objeto
      return schema.create('transaction', data)
    })
  } 
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
