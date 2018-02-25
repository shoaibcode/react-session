import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import NotFound from "./NotFound";


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
