import React from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import AddProduct from './components/CRUD/Create/Add';
import CrudApp from './components/container/CrudApp';
import EditPage from './components/CRUD/Update/Edit';

import './App.css';
import Nav from './components/Nav/Nav';
import Read from './components/CRUD/Read/Read';

const NoMatchPage = () => {
  return (
    <h3 style={{fontSize: '50px', textAlign:'center'}}>404 - Not found</h3>
  );
};

const App = props => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={CrudApp} />
        <Route path="/edit/:id" exact component={EditPage} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/show/:id" component={Read} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  )
}

export default App;