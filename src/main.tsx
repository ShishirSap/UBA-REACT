import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const client=new ApolloClient({
  uri:'http://localhost:3000/graphql',
  cache:new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <Provider store={store}>
      
    <App />
    
    </Provider>
    </ApolloProvider>
  // </React.StrictMode>,
)
