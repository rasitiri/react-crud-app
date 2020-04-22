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

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>          
        <Switch>
          <Route path="/" exact component={CrudApp} />
          <Route path="/edit/:id" exact component={EditPage} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/add">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;