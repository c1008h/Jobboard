import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage'
import { MyProfile } from './pages/MyProfile'
import { Savedjobs } from './pages/Savedjobs'
import { ViewOneCompany } from './pages/ViewOneCompany'
import { ViewOneSavedJob } from './pages/ViewOneSavedJob'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3002/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
      headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
          <Routes>
            <Route
              path='/'
              index element={<Homepage />}
            />
            <Route
              path='/:job_id'
              element={<ViewOneCompany />}
            />
            <Route 
                path="/savedjobs" 
                element={<Savedjobs />} 
            />
            <Route 
                path="/savedjobs/:id" 
                element={<ViewOneSavedJob />} 
            />
            <Route 
                path="/myprofile" 
                element={<MyProfile />} 
            />
            <Route 
                path="/login" 
                element={<Login />} 
            />
            <Route 
                path="/signup" 
                element={<Signup />} 
            />
          </Routes>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
