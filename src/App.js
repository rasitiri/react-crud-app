import React from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import AddProduct from './components/CRUD/Create/Add';
import CrudApp from './components/container/CrudApp';
import EditPage from './components/CRUD/Update/Edit';

import './App.css';

class App extends React.Component {
  render() {
    return (

      <Switch>
        <Route path="/" exact component={CrudApp} />
        <Route path="/edit/:id" exact component={EditPage} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/add">
          <AddProduct />
        </Route>
      </Switch>

    )
  }
}

export default App;