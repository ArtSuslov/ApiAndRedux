import React from 'react';
import './App.css';
import Users from './components/users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/posts';


const App = () => (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/posts/:id' component={Posts} />
        </Switch>
      </BrowserRouter>
)


export default App;
