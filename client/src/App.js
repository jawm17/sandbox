import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import SearchPage from "./SearchPage/SearchPage";
import HideSomething from './HideSomethingPage/HideSomething';

function App() {
  return (
    <Router history={history}>

        <Route path="/">
          <SearchPage />
        </Route>
        <Route exact path="/hide" component={HideSomething} />

    </Router>
  );
}

export default App;
