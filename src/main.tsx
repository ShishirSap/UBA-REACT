
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import {setContext} from '@apollo/client/link/context'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
const httpLink=createHttpLink({
  uri:'http://localhost:3000/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client=new ApolloClient({
  link:authLink.concat(httpLink),
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
