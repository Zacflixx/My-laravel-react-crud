import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

const App = () => {
    return (
        <Router className="App__container">
              <Switch>
          <Route exact path="/">
            <Home />
           </Route>
           </Switch>
          </Router>
    );
};
 ReactDOM.render(<App/>, document.getElementById('app'));
