// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Editor from './containers/Editor';
import HomePage from './containers/HomePage';
import ConfigForm from './containers/ConfigForm';


export default (
  <Route path="/" component={App}>
  <Route path="/home" component={HomePage} />
    <Route path="/editor" component={Editor} />
    <Route path="/config" component={ConfigForm} />
    <IndexRoute component={HomePage} />
  </Route>
);
